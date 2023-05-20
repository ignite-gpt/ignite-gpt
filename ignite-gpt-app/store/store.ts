import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import envReducer from './envSlice'

const rootReducer = combineReducers({
  env: envReducer,
})

const persistConfig = { key: 'root', storage: AsyncStorage }
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk],
})

export const persistor = persistStore(store)

// Enables refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
