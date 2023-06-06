To automatically update the `updatedAt` column to the current time when updating a message or a tree, you can create two separate triggers and functions for the `messages` and `trees` tables.

Here's how you can create these triggers and functions:

1. Create a function to set `updatedAt` to the current time for the `messages` table:

```sql
CREATE OR REPLACE FUNCTION public.update_messages_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  NEW."updatedAt" := NOW();
  RETURN NEW;
END;
$function$
```

2. Create a trigger for UPDATE operations on the `messages` table:

```sql
CREATE TRIGGER update_messages_updated_at_trigger
BEFORE UPDATE ON public.messages
FOR EACH ROW EXECUTE FUNCTION public.update_messages_updated_at();
```

3. Create a function to set `updatedAt` to the current time for the `trees` table:

```sql
CREATE OR REPLACE FUNCTION public.update_trees_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  NEW."updatedAt" := NOW();
  RETURN NEW;
END;
$function$
```

4. Create a trigger for UPDATE operations on the `trees` table:

```sql
CREATE TRIGGER update_trees_updated_at_trigger
BEFORE UPDATE ON public.trees
FOR EACH ROW EXECUTE FUNCTION public.update_trees_updated_at();
```

With these triggers and functions in place, the `updatedAt` column will be set to the current time automatically when updating a message or a tree.
