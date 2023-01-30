import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  headerText: string
}

const initialState: ModalState = {
  headerText: "Overview",
}

export const commonlSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateHeaderText: (state, title) => {
      state.headerText = title.payload
    },
  },
})

export const { updateHeaderText } = commonlSlice.actions

export const getHeaderText = (state) => state.common.headerText
export default commonlSlice.reducer
