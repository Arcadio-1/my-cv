"use client";
import React, { Fragment, useEffect } from "react";
import Modal from "../modal/Modal";
import CloseIcon from "../../menu/components/CloseIcon";
import WarningIcon from "./components/WarningIcon";
import ErrorIcon from "./components/ErrorIcon";
import InfoIcon from "./components/InfoIcon";
import SuccessIcon from "./components/SuccessIcon";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
import { Status } from "@/app/util/types";

const NotifCard = () => {
  const dispatchNotif = useDispatch();
  const notifState = useSelector((state: any) => state.ui.notif_card_status);

  useEffect(() => {
    if (
      notifState.status === Status.success ||
      notifState.status === Status.error ||
      notifState.status === Status.warning
    ) {
      console.log(notifState.status);
      const clearnotif = setTimeout(() => {
        dispatchNotif(
          uiAction.set_notif_card_status({
            status: Status.null,
            title: "",
            message: "",
          })
        );
      }, 4000);
      return () => {
        clearTimeout(clearnotif);
      };
    }
  }, [notifState, dispatchNotif]);

  return (
    <Fragment>
      <Modal>
        <div className={`sideNotif sideNotif-${notifState.status}`}>
          <div className="sideNotif-header">
            {notifState.message !== "null" && (
              <Fragment>
                <CloseIcon />
                {notifState.status === Status.success && <SuccessIcon />}
                {notifState.status === Status.warning && <WarningIcon />}
                {notifState.status === Status.error && <ErrorIcon />}
                {notifState.status === Status.loading && <InfoIcon />}
              </Fragment>
            )}
          </div>
          <div className="sideNotif-container">
            {notifState.message !== "null" && (
              <p className="sideNotif-message">{notifState.message}</p>
            )}
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default NotifCard;
