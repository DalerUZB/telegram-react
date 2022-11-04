import moment from "moment/moment";
import React from "react";
import './message.css'
const Messages = ({ createdBy, createdDate, message }) => {

  return (
    <>
      <div className="wrapper-info-component">

        <div className="person">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg"
            alt="person"
          />
        </div>

        <div className="wrapper-div-messages">

          <i className="personName">{createdBy}</i>

          <span className="messageSpan">
            {message}
          </span>

          <span>{moment().subtract(createdDate).calendar()}</span>

        </div>
      </div>
    </>
  );
};

export default Messages;
