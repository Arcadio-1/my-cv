"use client";
import {
  Full_status,
  InView,
  OpenToggle,
  Status,
  Theme,
} from "@/util/Types/types";
import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  get_database_cv_status: Full_status;
  get_server_cv_status: Full_status;
  send_message_status: Full_status;
  notif_card_status: Full_status;
  isMenuOpen: OpenToggle;
  isShowBackdrop: OpenToggle;
  inView: InView;
  windowWidth: number;
  activeAnimation: boolean;
}

export interface UiMainState {
  ui: UiState;
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
  inView: InView.home,
  windowWidth: 0,
  activeAnimation: false,
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
    set_inView(state, action) {
      state.inView = action.payload;
    },
    set_windowWidth(state, action) {
      state.windowWidth = action.payload;
    },
    activeAnimation(state) {
      state.activeAnimation = true;
    },
    deactiveAnimation(state) {
      state.activeAnimation = false;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
