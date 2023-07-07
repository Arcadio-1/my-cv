"use client";
import { Full_status, OpenToggle, Status, Theme } from "@/app/util/Types/types";
import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  get_database_cv_status: Full_status;
  get_server_cv_status: Full_status;
  send_message_status: Full_status;
  notif_card_status: Full_status;
  isMenuOpen: OpenToggle;
  isShowBackdrop: OpenToggle;
}

const initialState = {
  isMenuOpen: OpenToggle.close,
  isShowBackdrop: OpenToggle.close,
  get_database_cv_status: {
    status: Status.loading,
    tittle: "loading",
    message: "loading",
  },
  send_message_status: {
    status: Status.null,
    tittle: "",
    message: "",
  },
  notif_card_status: {
    status: Status.null,
    tittle: "",
    message: "",
  },
  get_server_cv_status: {
    status: Status.loading,
    tittle: "loading",
    message: "loading",
  },
} as UiState;
const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    set_send_message_status(state, action) {
      state.send_message_status = {
        status: action.payload.status,
        tittle: action.payload.tittle,
        message: action.payload.message,
      };
    },
    set_notif_card_status(state, action) {
      state.notif_card_status = {
        status: action.payload.status,
        tittle: action.payload.tittle,
        message: action.payload.message,
      };
    },
    set_get_database_cv_status(state, action) {
      state.get_database_cv_status = {
        status: action.payload.status,
        tittle: action.payload.tittle,
        message: action.payload.message,
      };
    },
    set_get_server_cv_status(state, action) {
      state.get_server_cv_status = {
        status: action.payload.status,
        tittle: action.payload.tittle,
        message: action.payload.message,
      };
    },
    closeMenu(state) {
      state.isMenuOpen = OpenToggle.close;
      state.isShowBackdrop = OpenToggle.close;
    },
    openMenu(state) {
      state.isMenuOpen = OpenToggle.open;
      state.isShowBackdrop = OpenToggle.open;
    },
    closeBackdrop(state) {
      state.isMenuOpen = OpenToggle.close;
      state.isShowBackdrop = OpenToggle.close;
    },
    openBackdrop(state) {
      state.isMenuOpen = OpenToggle.open;
      state.isShowBackdrop = OpenToggle.open;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
