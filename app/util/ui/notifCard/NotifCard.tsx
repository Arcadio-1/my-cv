"use client";
import React, { Fragment, useEffect, ReactNode } from "react";
import Modal from "../modal/Modal";
import CloseIcon from "./components/CloseIcon";
import WarningIcon from "./components/WarningIcon";
import ErrorIcon from "./components/ErrorIcon";
import InfoIcon from "./components/InfoIcon";
import SuccessIcon from "./components/SuccessIcon";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
import { Status } from "@/app/util/Types/types";

const NotifCard = () => {
  const dispatchNotif = useDispatch();
  const notifState = useSelector((state: any) => state.ui.notif_card_status);

  useEffect(() => {
    if (
      notifState.status === Status.success ||
      notifState.status === Status.error ||
      notifState.status === Status.warning
    ) {
      const clearnotif = setTimeout(() => {
        dispatchNotif(
          uiAction.set_notif_card_status({
            status: Status.null,
            title: "",
            message: "  ",
          })
        );
      }, 5000);
      return () => {
        clearTimeout(clearnotif);
      };
    }
  }, [notifState, dispatchNotif]);

  const statusIcon = (): ReactNode => {
    switch (notifState.status) {
      case Status.success:
        return <SuccessIcon />;
      case Status.warning:
        return <WarningIcon />;
      case Status.error:
        return <ErrorIcon />;
      case Status.loading:
        return <InfoIcon />;
    }
  };

  const closeHandler = () => {
    dispatchNotif(
      uiAction.set_notif_card_status({
        status: Status.null,
        title: "",
        message: "  ",
      })
    );
  };

  return (
    <Fragment>
      <Modal>
        {notifState.message && (
          <div className={`notifCard notifCard-${notifState.status}`}>
            <div className="notifCard-header">
              <div className="notifCard-header-control" onClick={closeHandler}>
                <CloseIcon />
              </div>
              <div className="notifCard-header-status">{statusIcon()}</div>
            </div>
            <div className="notifCard-container">
              {notifState.message !== "null" && (
                <p className="notifCard-message">{notifState.message}</p>
              )}
            </div>
          </div>
        )}
      </Modal>
    </Fragment>
  );
};

export default NotifCard;
