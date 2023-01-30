import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  showCreateNewStore: boolean
}

const initialState: ModalState = {
  showCreateNewStore: false,

}

export const globalModalSlice = createSlice({
  name: "globalModal",
  initialState,
  reducers: {
    toggleCreateNewStore: (state) => {
      state.showCreateNewStore = !state.showCreateNewStore
    },

  },
})

export const {
  toggleCreateNewStore,

} = globalModalSlice.actions

export const selectShowNewStore = (state) => state.globalModal.showCreateNewStore
export default globalModalSlice.reducer
