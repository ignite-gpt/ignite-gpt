import { api } from './emptyApi'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTrees: build.query<GetTreesApiResponse, GetTreesApiArg>({
      query: (queryArg) => ({
        url: `/trees`,
        params: {
          page: queryArg.page,
          sort: queryArg.sort,
          filter: queryArg.filter,
        },
      }),
    }),
    createTree: build.mutation<CreateTreeApiResponse, CreateTreeApiArg>({
      query: (queryArg) => ({
        url: `/trees`,
        method: 'POST',
        body: queryArg.createTreeRequest,
      }),
    }),
    getTree: build.query<GetTreeApiResponse, GetTreeApiArg>({
      query: (queryArg) => ({ url: `/trees/${queryArg.treeId}` }),
    }),
    updateTree: build.mutation<UpdateTreeApiResponse, UpdateTreeApiArg>({
      query: (queryArg) => ({
        url: `/trees/${queryArg.treeId}`,
        method: 'PATCH',
        body: queryArg.updateTreeRequest,
      }),
    }),
    deleteTree: build.mutation<DeleteTreeApiResponse, DeleteTreeApiArg>({
      query: (queryArg) => ({
        url: `/trees/${queryArg.treeId}`,
        method: 'DELETE',
      }),
    }),
    getTreeMessages: build.query<
      GetTreeMessagesApiResponse,
      GetTreeMessagesApiArg
    >({
      query: (queryArg) => ({
        url: `/trees/${queryArg.treeId}/messages`,
        params: {
          page: queryArg.page,
          sort: queryArg.sort,
          filter: queryArg.filter,
        },
      }),
    }),
    createTreeMessage: build.mutation<
      CreateTreeMessageApiResponse,
      CreateTreeMessageApiArg
    >({
      query: (queryArg) => ({
        url: `/trees/${queryArg.treeId}/messages`,
        method: 'POST',
        body: queryArg.createMessageRequest,
      }),
    }),
    updateTreeMessage: build.mutation<
      UpdateTreeMessageApiResponse,
      UpdateTreeMessageApiArg
    >({
      query: (queryArg) => ({
        url: `/trees/${queryArg.treeId}/messages/${queryArg.msgId}`,
        method: 'PATCH',
        body: queryArg.updateMessageRequest,
      }),
    }),
    deleteTreeMessage: build.mutation<
      DeleteTreeMessageApiResponse,
      DeleteTreeMessageApiArg
    >({
      query: (queryArg) => ({
        url: `/trees/${queryArg.treeId}/messages/${queryArg.msgId}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type GetTreesApiResponse =
  /** status 200 A list of trees */ TreesResponse
export type GetTreesApiArg = {
  page?: {
    number?: number
    size?: number
  }
  /** Comma-separated field names to sort by. Use -<fieldname> for descending order. */
  sort?: string
  /** Field to filter by, in the format filter[<fieldname>][<operator>]=<value>. Operators can be eq (equals), gt (greater than), lt (less than), gte (greater than or equals), lte (less than or equals), ne (not equals). */
  filter?: {
    [key: string]: {
      [key: string]: string
    }
  }
}
export type CreateTreeApiResponse =
  /** status 201 A created tree */ TreeResponse
export type CreateTreeApiArg = {
  createTreeRequest: CreateTreeRequest
}
export type GetTreeApiResponse = /** status 200 A tree */ TreeResponse
export type GetTreeApiArg = {
  treeId: string
}
export type UpdateTreeApiResponse =
  /** status 200 An updated tree */ TreeResponse
export type UpdateTreeApiArg = {
  treeId: string
  updateTreeRequest: UpdateTreeRequest
}
export type DeleteTreeApiResponse =
  /** status 204 Tree successfully deleted */ undefined
export type DeleteTreeApiArg = {
  treeId: string
}
export type GetTreeMessagesApiResponse =
  /** status 200 A list of messages in a tree */ MessagesResponse
export type GetTreeMessagesApiArg = {
  treeId: string
  page?: {
    number?: number
    size?: number
  }
  /** Comma-separated field names to sort by. Use -<fieldname> for descending order. */
  sort?: string
  /** Field to filter by, in the format filter[<fieldname>][<operator>]=<value>. Operators can be eq (equals), gt (greater than), lt (less than), gte (greater than or equals), lte (less than or equals), ne (not equals). */
  filter?: {
    [key: string]: {
      [key: string]: string
    }
  }
}
export type CreateTreeMessageApiResponse =
  /** status 201 A created message */ MessageResponse
export type CreateTreeMessageApiArg = {
  treeId: string
  createMessageRequest: CreateMessageRequest
}
export type UpdateTreeMessageApiResponse =
  /** status 200 An updated message */ MessageResponse
export type UpdateTreeMessageApiArg = {
  treeId: string
  msgId: string
  updateMessageRequest: UpdateMessageRequest
}
export type DeleteTreeMessageApiResponse =
  /** status 204 Message successfully deleted */ undefined
export type DeleteTreeMessageApiArg = {
  treeId: string
  msgId: string
}
export type TreeAttributes = {
  name?: string
  description?: string
  createdAt?: string
  updatedAt?: string
  owner?: string
  isPrivate?: boolean
  isDeleted?: boolean
  forks?: number
}
export type TreeRelationships = {
  messages?: {
    links?: {
      related?: string
    }
  }
}
export type TreeResource = {
  id?: string
  type?: 'tree'
  attributes?: TreeAttributes
  relationships?: TreeRelationships
}
export type PaginationLinks = {
  self?: string
  first?: string
  last?: string
  prev?: any
  next?: any
}
export type TreesResponse = {
  data: TreeResource[]
  links?: PaginationLinks
}
export type Error = {
  id?: string
  links?: {
    about?: string
  }
  status?: string
  code?: string
  title?: string
  detail: string
}
export type ErrorsResponse = {
  errors: Error[]
}
export type TreeResponse = {
  data: TreeResource
}
export type CreateTreeAttributes = {
  name?: string
  description?: string
  isPrivate?: boolean
  fork?: string
}
export type CreateTreeRequest = {
  data: {
    id?: string
    type: 'tree'
    attributes: CreateTreeAttributes
  }
}
export type UpdateTreeAttributes = {
  name?: string
  description?: string
  isPrivate?: boolean
}
export type UpdateTreeRequest = {
  data: {
    id: string
    type: 'tree'
    attributes: UpdateTreeAttributes
  }
}
export type MessageAttributes = {
  createdAt?: string
  updatedAt?: string
  isDeleted?: boolean
  parent?: any
  role?: string
  content?: string
  tokens?: number
}
export type MessageResource = {
  id?: string
  type?: 'message'
  attributes?: MessageAttributes
}
export type MessagesResponse = {
  data: MessageResource[]
  links?: PaginationLinks
}
export type MessageResponse = {
  data: MessageResource
}
export type CreateMessageAttributes = {
  parent?: string
  role?: string
  content?: string
}
export type CreateMessageRequest = {
  data: {
    id?: string
    type: 'message'
    attributes: CreateMessageAttributes
  }
}
export type UpdateMessageAttributes = {
  parent?: string
  role?: string
  content?: string
}
export type UpdateMessageRequest = {
  data: {
    id: string
    type: 'message'
    attributes: UpdateMessageAttributes
  }
}
export const {
  useGetTreesQuery,
  useCreateTreeMutation,
  useGetTreeQuery,
  useUpdateTreeMutation,
  useDeleteTreeMutation,
  useGetTreeMessagesQuery,
  useCreateTreeMessageMutation,
  useUpdateTreeMessageMutation,
  useDeleteTreeMessageMutation,
} = injectedRtkApi
