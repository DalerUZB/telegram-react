import React from "react";

import ChooseFile from "../../assets/footerSendMessage/Shape-2.svg";
import SendMessageIcon from "../../assets/footerSendMessage/Shape-1.svg";
import SendVoice from "../../assets/footerSendMessage/Shape.svg";

const SendMessage = () => {
  return (
    <>
      <div className="send-message-div">
        <div className="sendFileToMessage">
          <img
            src={ChooseFile}
            alt="footerSendMessage"
            className="chooseFile"
          />
          <input
            className="sendMessage"
            type="text"
            placeholder="Write a message..."
          />
        </div>
        <div className="sendEmojiVoice">
          <img src={SendMessageIcon} alt="SendMessage" />
          <img src={SendVoice} alt="SendMessage" />
        </div>
      </div>
    </>
  );
};

export default SendMessage;
