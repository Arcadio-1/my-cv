"use client";
import { AppDispatch } from "@/redux/store";
import { uiAction } from "../ui/uiSlice";
import { getDataSliceActions } from "./getDataSlice";

export const getCv = () => {
  return async (dispatch: AppDispatch) => {
    console.log("testtttttttt");
    try {
      dispatch(
        uiAction.set_get_cv_status({
          status: "loading",
          title: "Loading...",
          message: "در حال دریافت لیست محصولات",
        })
      );

      const request = await fetch("/api/myCv", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log(request);
      const data = await request.json();
      console.log(data);
      if (data.status === "404") {
        throw new Error("خطا در دریافت اطلاعات لیست محصولات");
      }

      dispatch(getDataSliceActions.getCv(data.data));

      // console.log(data);
      dispatch(
        uiAction.set_get_cv_status({
          status: "success",
          title: "Successfuly...",
          message: "لیست محصولات با موفقیت دریافت شد",
        })
      );
    } catch (error) {
      uiAction.set_get_cv_status({
        status: "error",
        title: "Error...",
        message: error,
      });
    }
  };
};
