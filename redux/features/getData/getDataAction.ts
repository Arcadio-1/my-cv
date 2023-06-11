"use client";
import { AppDispatch } from "@/redux/store";
import { uiAction } from "../ui/uiSlice";
import { getDataSliceActions } from "./getDataSlice";
import { CV, Status } from "@/app/util/types";

export const get_cv_databaase = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(
        uiAction.set_get_database_cv_status({
          status: Status.loading,
          title: "Loading...",
          message: "در حال دریافت لیست محصولات",
        })
      );

      const request = await fetch("/api/myCv", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      if (data.status === "404") {
        throw new Error("خطا در دریافت اطلاعات لیست محصولات");
      }

      dispatch(getDataSliceActions.set_database_cv(data.data));

      dispatch(
        uiAction.set_get_database_cv_status({
          status: Status.success,
          title: "Successfuly...",
          message: "لیست محصولات با موفقیت دریافت شد",
        })
      );
    } catch (error) {
      uiAction.set_get_database_cv_status({
        status: Status.error,
        title: "Error...",
        message: error,
      });
    }
  };
};
export const get_cv_server = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(
        uiAction.set_get_server_cv_status({
          status: Status.loading,
          title: "Loading...",
          message: "در حال دریافت لیست محصولات",
        })
      );

      const request = await fetch("/api/myCv/static", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      if (data.status === "404") {
        throw new Error("خطا در دریافت اطلاعات لیست محصولات");
      }
      if (data.status === 200) {
        const dataa: CV = JSON.parse(data.data);
        dispatch(getDataSliceActions.set_server_cv(dataa));
      }

      dispatch(
        uiAction.set_get_server_cv_status({
          status: Status.success,
          title: "Successfuly...",
          message: "لیست محصولات با موفقیت دریافت شد",
        })
      );
    } catch (error) {
      uiAction.set_get_server_cv_status({
        status: Status.error,
        title: "Error...",
        message: error,
      });
    }
  };
};
