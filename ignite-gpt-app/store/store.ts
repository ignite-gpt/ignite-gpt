// TODO: Finish https://redux-toolkit.js.org/tutorials/typescript
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import envReducer from './envSlice'

export const store = configureStore({
  reducer: {
    env: envReducer,
  },
})

// Enables refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
