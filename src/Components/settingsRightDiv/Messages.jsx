import React from "react";

const Messages = ({ createdBy, createdDate, message }) => {
  return (
    <>
      <div className="wrapper-info-component">
        <div className="person">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg"
            alt="person"
          />
          <span className="personName">{createdBy}</span>
        </div>
        <div className="wrapper-div-messages">
          <span>
            {message}
          </span>
          <span>{createdDate} AM</span>
        </div>
      </div>
    </>
  );
};

export default Messages;
