import React from "react";
import RightHeaderTwoIcon from "../../assets/rightHeader/Shape-2.svg";
import RightHeaderThreeIcon from "../../assets/rightHeader/Shape-1.svg";
import RightHeader from "../../assets/rightHeader/Shape.svg";

const RightThHeader = () => {
  return (
    <>
      <div className="right-header">
        <div className="info-chat">
          <div className="chat-image-div">
            <img
              src="https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg"
              alt="personimage"
            />
          </div>
          <div className="chat-div-title">
            <span>Design Review Chat</span>
            <span>5 members, 3 online</span>
          </div>
        </div>
        <div className="wrapper-circle">
          <div className="circle circle-1">
            <img src={RightHeader} alt="search" />
          </div>
          <div className="circle circle-2">
            <img src={RightHeaderTwoIcon} alt="message" />
          </div>
          <div className="circle circle-3">
            <img src={RightHeaderThreeIcon} alt="info" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightThHeader;
