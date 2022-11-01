import React, { useRef, useState } from "react";

import ChooseFile from "../../assets/footerSendMessage/Shape-2.svg";
import SendMessageIcon from "../../assets/footerSendMessage/Shape-1.svg";
import SendVoice from "../../assets/footerSendMessage/Shape.svg";
import SendMessageIconSvg from "../../assets/footerSendMessage/send.svg";
import { useDispatch } from "react-redux";
import { fetchSendMessageAction } from "../../store/action";

const SendMessage = () => {
  const sendMessage = useRef();
  const dispatch = useDispatch();
  const [valueLength, setValueLength] = useState(0);

  const securtyValue = (e) => {
    setValueLength(e.target.value.length);
  };

  const sendMessageFunc = () => {
    const body = {
      message: sendMessage.current.value,
    };
    dispatch(fetchSendMessageAction(body));
  };

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
            ref={sendMessage}
            className="sendMessage"
            type="text"
            placeholder="Write a message..."
            onKeyUp={(e) => securtyValue(e)}
          />
        </div>
        <div className="sendEmojiVoice">
          <img src={SendMessageIcon} alt="SendMessage" />
          {valueLength > 0 ? (
            <img
              src={SendMessageIconSvg}
              alt="SendMessage"
              onClick={() => sendMessageFunc()}
            />
          ) : (
            <img src={SendVoice} alt="sendVoise" />
          )}
        </div>
      </div>
    </>
  );
};

export default SendMessage;
