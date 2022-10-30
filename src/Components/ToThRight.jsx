import React from "react";

import Messages from "./settingsRightDiv/Messages";
import RightThHeader from "./settingsRightDiv/RightThHeader";
import SendMessage from "./settingsRightDiv/SendMessage";

const ToThRight = () => {
  return (
    <>
      <div className="right-div">
        <RightThHeader />
        <div className="div-wrapper-components">
          <div className="for-reverse">
            <Messages />
          </div>
        </div>
          <SendMessage /> 
      </div>
    </>
  );
};

export default ToThRight;
