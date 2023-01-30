import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import globalModalReducer from "./slices/globalModalSlice"
import commonReducer from "./slices/commonSlice"

export function makeStore() {
  return configureStore({
    reducer: {
      globalModal: globalModalReducer,
      common: commonReducer,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
