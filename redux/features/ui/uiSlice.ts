import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  get_cv_status: { status: string; tittle: string; message: string };
}

const initialState = {
  get_cv_status: {
    status: "loading",
    tittle: "loading",
    message: "loading",
  },
} as uiState;

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    set_get_cv_status(state, action) {
      state.get_cv_status = {
        status: action.payload.status,
        tittle: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
