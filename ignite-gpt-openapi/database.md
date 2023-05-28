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
    isDeleted boolean not null default false,
    createdAt timestamp with time zone not null default now(),
    updatedAt timestamp with time zone not null default now(),
    constraint trees_pkey primary key (id),
    constraint trees_id_key unique (id),
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

## Messages

```sql
create table
  public.messages (
    id uuid not null,
    treeId uuid not null,
    parent uuid null,
    content text not null,
    tokens integer null,
    role text null,
    isDeleted boolean not null default false,
    createdAt timestamp with time zone not null default now(),
    updatedAt timestamp with time zone not null default now(),
    userId uuid not null default auth.uid (),
    isTemplate boolean not null default false,
    templateId uuid null,
    constraint messages_pkey primary key (id),
    constraint messages_id_key unique (id),
    constraint messages_parent_fkey foreign key (parent) references messages (id) on delete cascade,
    constraint messages_templateId_fkey foreign key ("templateId") references messages (id) on delete set null,
    constraint messages_treeId_fkey foreign key ("treeId") references trees (id) on delete cascade,
    constraint messages_userId_fkey foreign key ("userId") references auth.users (id) on delete cascade
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
CREATE POLICY "Write access for a user's messages" ON "public"."messages"
AS PERMISSIVE FOR ALL
TO authenticated
USING ("userId" = auth.uid())
WITH CHECK ("userId" = auth.uid())
```
