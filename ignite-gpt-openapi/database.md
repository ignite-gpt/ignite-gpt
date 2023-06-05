## Trees

```sql
create table
  public.trees (
    id uuid not null default gen_random_uuid (),
    name text null,
    description text null,
    userId uuid not null default auth.uid (),
    forks integer not null default 0,
    isPublic boolean not null default false,
    createdAt timestamp with time zone not null default now(),
    updatedAt timestamp with time zone not null default now(),
    forkSourceId uuid null,
    settings jsonb null,
    isTemplate boolean not null default false,
    templateId uuid null,
    constraint trees_pkey primary key (id),
    constraint trees_id_key unique (id),
    constraint trees_forkSourceId_fkey foreign key ("forkSourceId") references trees (id) on delete set default,
    constraint trees_templateId_fkey foreign key ("templateId") references trees (id) on delete set default,
    constraint trees_userId_fkey foreign key ("userId") references auth.users (id) on delete cascade
  ) tablespace pg_default;
```

## Trees Policies

```sql
CREATE POLICY "Read access for public trees" ON "public"."trees"
AS PERMISSIVE FOR SELECT
TO public
USING ("isPublic" = true)
```

```sql
CREATE POLICY "Write access for a user's trees" ON "public"."trees"
AS PERMISSIVE FOR ALL
TO authenticated
USING ("userId" = auth.uid())
WITH CHECK ("userId" = auth.uid())
```

## Trees Functions and Triggers

### Ignore changes to read-only `trees` columns

```sql
CREATE OR REPLACE FUNCTION public."treesReadOnlyColumnsOnInsert"()
  RETURNS trigger
  LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.forks := DEFAULT;
  NEW."createdAt" := DEFAULT;
  NEW."updatedAt" := DEFAULT;
  RETURN NEW;
END;
$function$
```

```sql
CREATE TRIGGER "treesReadOnlyColumnsOnInsertTrigger"
BEFORE INSERT ON public.trees
FOR EACH ROW EXECUTE FUNCTION "treesReadOnlyColumnsOnInsert"();
```

```sql
CREATE OR REPLACE FUNCTION public."treesReadOnlyColumnsOnUpdate"()
  RETURNS trigger
  LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.forks := OLD.forks;
  NEW."createdAt" := OLD."createdAt";
  NEW."updatedAt" := OLD."updatedAt";
  RETURN NEW;
END;
$function$
```

```sql
CREATE TRIGGER "treesReadOnlyColumnsOnUpdateTrigger"
BEFORE UPDATE ON public.trees
FOR EACH ROW EXECUTE FUNCTION "treesReadOnlyColumnsOnUpdate"();
```

### Update `forks` count

```sql
CREATE OR REPLACE FUNCTION public."treesForksIncrement"()
  RETURNS trigger
  LANGUAGE plpgsql
AS $function$
BEGIN
  IF NEW."forkSourceId" IS NOT NULL THEN
    UPDATE public.trees
    SET "forks" = "forks" + 1
    WHERE "id" = NEW."forkSourceId";
  END IF;
  RETURN NEW;
END;
$function$
```

```sql
CREATE TRIGGER "treesForksOnInsertTrigger"
AFTER INSERT ON public.trees
FOR EACH ROW EXECUTE FUNCTION "treesForksIncrement"();
```

```sql
CREATE OR REPLACE FUNCTION public."treesForksDecrement"()
  RETURNS trigger
  LANGUAGE plpgsql
AS $function$
BEGIN
  IF OLD."forkSourceId" IS NOT NULL THEN
    UPDATE public.trees
    SET "forks" = "forks" - 1
    WHERE "id" = OLD."forkSourceId";
  END IF;
  RETURN OLD;
END;
$function$
```

```sql
CREATE TRIGGER "treesForksOnDeleteTrigger"
AFTER DELETE ON public.trees
FOR EACH ROW EXECUTE FUNCTION "treesForksDecrement"();
```

## Messages

```sql
create table
  public.messages (
    id uuid not null default gen_random_uuid (),
    treeId uuid not null,
    parent uuid null,
    content text not null,
    role text null,
    createdAt timestamp with time zone not null default now(),
    updatedAt timestamp with time zone not null default now(),
    constraint messages_pkey primary key (id),
    constraint messages_id_key unique (id),
    constraint messages_parent_fkey foreign key (parent) references messages (id) on delete cascade,
    constraint messages_treeId_fkey foreign key ("treeId") references trees (id) on delete cascade
  ) tablespace pg_default;
```

## Messages Policies

```sql
CREATE POLICY "Read access for public messages" ON "public"."messages"
AS PERMISSIVE FOR SELECT
TO public
USING (EXISTS ( SELECT 1 FROM "public"."trees" WHERE "trees"."id" = "messages"."treeId" AND "trees"."isPublic" = true ))
```

```sql
CREATE POLICY "Write access for a user's messages" ON "messages"
AS PERMISSIVE FOR ALL
TO authenticated
USING (EXISTS ( SELECT 1 FROM "trees" WHERE "trees"."id" = "messages"."treeId" AND "trees"."userId" = auth.uid() ))
WITH CHECK (EXISTS ( SELECT 1 FROM "trees" WHERE "trees"."id" = "messages"."treeId" AND "trees"."userId" = auth.uid() ))
```

## Messages Functions and Triggers

Ignore changes to read-only `messages` columns

```sql
CREATE OR REPLACE FUNCTION public."messagesReadOnlyColumnsOnInsert"()
  RETURNS trigger
  LANGUAGE plpgsql
AS $function$
BEGIN
  NEW."createdAt" := DEFAULT;
  NEW."updatedAt" := DEFAULT;
  RETURN NEW;
END;
$function$
```

```sql
CREATE TRIGGER "messagesReadOnlyColumnsOnInsertTrigger"
BEFORE INSERT ON public.messages
FOR EACH ROW EXECUTE FUNCTION "messagesReadOnlyColumnsOnInsert"();
```

```sql
CREATE OR REPLACE FUNCTION public."messagesReadOnlyColumnsOnUpdate"()
  RETURNS trigger
  LANGUAGE plpgsql
AS $function$
BEGIN
  NEW."createdAt" := OLD."createdAt";
  NEW."updatedAt" := OLD."updatedAt";
  RETURN NEW;
END;
$function$
```

```sql
CREATE TRIGGER "messagesReadOnlyColumnsOnUpdateTrigger"
BEFORE UPDATE ON public.messages
FOR EACH ROW EXECUTE FUNCTION "messagesReadOnlyColumnsOnUpdate"();
```
