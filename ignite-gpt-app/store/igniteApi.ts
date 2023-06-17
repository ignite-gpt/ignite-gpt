import { api } from './emptyApi'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTrees: build.query<GetTreesApiResponse, GetTreesApiArg>({
      query: (queryArg) => ({
        url: `/trees`,
        headers: {
          Range: queryArg.range,
          'Range-Unit': queryArg['Range-Unit'],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          name: queryArg.name,
          description: queryArg.description,
          userId: queryArg.userId,
          forks: queryArg.forks,
          isPublic: queryArg.isPublic,
          createdAt: queryArg.createdAt,
          updatedAt: queryArg.updatedAt,
          forkSourceId: queryArg.forkSourceId,
          settings: queryArg.settings,
          isTemplate: queryArg.isTemplate,
          templateId: queryArg.templateId,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postTrees: build.mutation<PostTreesApiResponse, PostTreesApiArg>({
      query: (queryArg) => ({
        url: `/trees`,
        method: 'POST',
        body: queryArg.trees,
        headers: { Prefer: queryArg.prefer },
        params: { select: queryArg.select },
      }),
    }),
    deleteTrees: build.mutation<DeleteTreesApiResponse, DeleteTreesApiArg>({
      query: (queryArg) => ({
        url: `/trees`,
        method: 'DELETE',
        headers: { Prefer: queryArg.prefer },
        params: {
          id: queryArg.id,
          name: queryArg.name,
          description: queryArg.description,
          userId: queryArg.userId,
          forks: queryArg.forks,
          isPublic: queryArg.isPublic,
          createdAt: queryArg.createdAt,
          updatedAt: queryArg.updatedAt,
          forkSourceId: queryArg.forkSourceId,
          settings: queryArg.settings,
          isTemplate: queryArg.isTemplate,
          templateId: queryArg.templateId,
        },
      }),
    }),
    patchTrees: build.mutation<PatchTreesApiResponse, PatchTreesApiArg>({
      query: (queryArg) => ({
        url: `/trees`,
        method: 'PATCH',
        body: queryArg.trees,
        headers: { Prefer: queryArg.prefer },
        params: {
          id: queryArg.id,
          name: queryArg.name,
          description: queryArg.description,
          userId: queryArg.userId,
          forks: queryArg.forks,
          isPublic: queryArg.isPublic,
          createdAt: queryArg.createdAt,
          updatedAt: queryArg.updatedAt,
          forkSourceId: queryArg.forkSourceId,
          settings: queryArg.settings,
          isTemplate: queryArg.isTemplate,
          templateId: queryArg.templateId,
        },
      }),
    }),
    getMessages: build.query<GetMessagesApiResponse, GetMessagesApiArg>({
      query: (queryArg) => ({
        url: `/messages`,
        headers: {
          Range: queryArg.range,
          'Range-Unit': queryArg['Range-Unit'],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          treeId: queryArg.treeId,
          parent: queryArg.parent,
          content: queryArg.content,
          role: queryArg.role,
          createdAt: queryArg.createdAt,
          updatedAt: queryArg.updatedAt,
          comment: queryArg.comment,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postMessages: build.mutation<PostMessagesApiResponse, PostMessagesApiArg>({
      query: (queryArg) => ({
        url: `/messages`,
        method: 'POST',
        body: queryArg.messages,
        headers: { Prefer: queryArg.prefer },
        params: { select: queryArg.select },
      }),
    }),
    deleteMessages: build.mutation<
      DeleteMessagesApiResponse,
      DeleteMessagesApiArg
    >({
      query: (queryArg) => ({
        url: `/messages`,
        method: 'DELETE',
        headers: { Prefer: queryArg.prefer },
        params: {
          id: queryArg.id,
          treeId: queryArg.treeId,
          parent: queryArg.parent,
          content: queryArg.content,
          role: queryArg.role,
          createdAt: queryArg.createdAt,
          updatedAt: queryArg.updatedAt,
          comment: queryArg.comment,
        },
      }),
    }),
    patchMessages: build.mutation<
      PatchMessagesApiResponse,
      PatchMessagesApiArg
    >({
      query: (queryArg) => ({
        url: `/messages`,
        method: 'PATCH',
        body: queryArg.messages,
        headers: { Prefer: queryArg.prefer },
        params: {
          id: queryArg.id,
          treeId: queryArg.treeId,
          parent: queryArg.parent,
          content: queryArg.content,
          role: queryArg.role,
          createdAt: queryArg.createdAt,
          updatedAt: queryArg.updatedAt,
          comment: queryArg.comment,
        },
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type GetTreesApiResponse =
  /** status 200 OK */
  Trees[] | /** status 206 Partial Content */ undefined
export type GetTreesApiArg = {
  id?: string
  name?: string
  description?: string
  userId?: string
  forks?: string
  isPublic?: string
  createdAt?: string
  updatedAt?: string
  forkSourceId?: string
  settings?: string
  isTemplate?: string
  templateId?: string
  /** Filtering Columns */
  select?: string
  /** Ordering */
  order?: string
  /** Limiting and Pagination */
  range?: string
  /** Limiting and Pagination */
  'Range-Unit'?: string
  /** Limiting and Pagination */
  offset?: string
  /** Limiting and Pagination */
  limit?: string
  /** Preference */
  prefer?: 'count=none'
}
export type PostTreesApiResponse = unknown
export type PostTreesApiArg = {
  /** Filtering Columns */
  select?: string
  /** Preference */
  prefer?:
    | 'return=representation'
    | 'return=minimal'
    | 'return=none'
    | 'resolution=ignore-duplicates'
    | 'resolution=merge-duplicates'
  /** trees */
  trees: Trees
}
export type DeleteTreesApiResponse = unknown
export type DeleteTreesApiArg = {
  id?: string
  name?: string
  description?: string
  userId?: string
  forks?: string
  isPublic?: string
  createdAt?: string
  updatedAt?: string
  forkSourceId?: string
  settings?: string
  isTemplate?: string
  templateId?: string
  /** Preference */
  prefer?: 'return=representation' | 'return=minimal' | 'return=none'
}
export type PatchTreesApiResponse = unknown
export type PatchTreesApiArg = {
  id?: string
  name?: string
  description?: string
  userId?: string
  forks?: string
  isPublic?: string
  createdAt?: string
  updatedAt?: string
  forkSourceId?: string
  settings?: string
  isTemplate?: string
  templateId?: string
  /** Preference */
  prefer?: 'return=representation' | 'return=minimal' | 'return=none'
  /** trees */
  trees: Trees
}
export type GetMessagesApiResponse =
  /** status 200 OK */
  Messages[] | /** status 206 Partial Content */ undefined
export type GetMessagesApiArg = {
  id?: string
  treeId?: string
  parent?: string
  content?: string
  role?: string
  createdAt?: string
  updatedAt?: string
  /** Extra user-provided information, not sent to LLM */
  comment?: string
  /** Filtering Columns */
  select?: string
  /** Ordering */
  order?: string
  /** Limiting and Pagination */
  range?: string
  /** Limiting and Pagination */
  'Range-Unit'?: string
  /** Limiting and Pagination */
  offset?: string
  /** Limiting and Pagination */
  limit?: string
  /** Preference */
  prefer?: 'count=none'
}
export type PostMessagesApiResponse = unknown
export type PostMessagesApiArg = {
  /** Filtering Columns */
  select?: string
  /** Preference */
  prefer?:
    | 'return=representation'
    | 'return=minimal'
    | 'return=none'
    | 'resolution=ignore-duplicates'
    | 'resolution=merge-duplicates'
  /** messages */
  messages: Messages
}
export type DeleteMessagesApiResponse = unknown
export type DeleteMessagesApiArg = {
  id?: string
  treeId?: string
  parent?: string
  content?: string
  role?: string
  createdAt?: string
  updatedAt?: string
  /** Extra user-provided information, not sent to LLM */
  comment?: string
  /** Preference */
  prefer?: 'return=representation' | 'return=minimal' | 'return=none'
}
export type PatchMessagesApiResponse = unknown
export type PatchMessagesApiArg = {
  id?: string
  treeId?: string
  parent?: string
  content?: string
  role?: string
  createdAt?: string
  updatedAt?: string
  /** Extra user-provided information, not sent to LLM */
  comment?: string
  /** Preference */
  prefer?: 'return=representation' | 'return=minimal' | 'return=none'
  /** messages */
  messages: Messages
}
export type Trees = {
  id: string
  name?: string
  description?: string
  userId: string
  forks: number
  isPublic: boolean
  createdAt: string
  updatedAt: string
  forkSourceId?: string
  settings?: any
  isTemplate: boolean
  templateId?: string
}
export type Messages = {
  id: string
  treeId: string
  parent?: string
  content: string
  role?: string
  createdAt: string
  updatedAt: string
  comment?: string
}
export const {
  useGetTreesQuery,
  usePostTreesMutation,
  useDeleteTreesMutation,
  usePatchTreesMutation,
  useGetMessagesQuery,
  usePostMessagesMutation,
  useDeleteMessagesMutation,
  usePatchMessagesMutation,
} = injectedRtkApi
