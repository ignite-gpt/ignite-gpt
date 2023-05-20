import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// import type { RootState } from './store'

const initialState = {
  openAiApiKey: '',
}

export const envSlice = createSlice({
  name: 'env',
  initialState,
  reducers: {
    // Using the PayloadAction type declares the contents of `action.payload`
    save: (state, action: PayloadAction<typeof initialState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { save } = envSlice.actions

// Selectors (and other code) can use the imported `RootState` type
// export const selectOpenAiApiKey = (state: RootState) => state.env.openAiApiKey

export default envSlice.reducer
