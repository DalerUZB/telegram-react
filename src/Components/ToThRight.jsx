import React from "react";
import { useSelector } from "react-redux";

import Messages from "./settingsRightDiv/Messages";
import RightThHeader from "./settingsRightDiv/RightThHeader";
import SendMessage from "./settingsRightDiv/SendMessage";

const ToThRight = () => {
  const { showChat } = useSelector((store) => store.reducer);
  return (
    <>
      {showChat && (
        <div className="right-div">
          <RightThHeader />
          <div className="div-wrapper-components">
            <div className="for-reverse">{<Messages />}</div>
          </div>
          <SendMessage />
        </div>
      )}
    </>
  );
};

export default ToThRight;
