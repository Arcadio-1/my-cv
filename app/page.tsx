"use client";
import { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Full_status, Status } from "./util/types";
import ASide from "./components/aside/ASide";
import { useAppDispatch } from "@/redux/hook";
import { get_cv_server } from "@/redux/features/getData/getDataAction";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";

export default async function Home() {
  const server_cv_status: Full_status = useSelector(
    (state: any) => state.ui.get_server_cv_status
  );

  const dispatch_server_cv = useAppDispatch();
  useEffect(() => {
    dispatch_server_cv(get_cv_server());
  }, [dispatch_server_cv]);

  if (server_cv_status && server_cv_status.status == Status.success) {
    return (
      <div className="cv">
        <Menu />
        <ASide />
        <div className="mr-auto ml-auto">
          <Main />
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>loading</p>
    </div>
  );
}
