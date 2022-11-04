import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataMessages } from "../store/action";

import Messages from "./settingsRightDiv/Messages";
import RightThHeader from "./settingsRightDiv/RightThHeader";
import SendMessage from "./settingsRightDiv/SendMessage";

const ToThRight = () => {
  const { showChat, messages } = useSelector((store) => store.reducer);
  const dispatch = useDispatch()
  useEffect(() => {
    setInterval(() => {
      dispatch(fetchDataMessages());
    }, 5000)

  }, [])
  return (
    <>
      {showChat && (
        <div className="right-div">
          <RightThHeader />
          <div className="div-wrapper-components">
            <div className="for-reverse">
              {
                messages?.map((message) => (
                  <Messages key={message._id} {...message} />
                ))
              }
            </div>
          </div>
          <SendMessage />
        </div>
      )}
    </>
  );
};

export default ToThRight;
