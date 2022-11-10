import React from "react";
import RightHeaderTwoIcon from "../../assets/rightHeader/Shape-2.svg";
import RightHeaderThreeIcon from "../../assets/rightHeader/Shape-1.svg";
import RightHeader from "../../assets/rightHeader/Shape.svg";
import Burger from "../../assets/rightHeader/burgerDis.png";
import "./RigthHeaderDrawer.css"
import FoundationImageJ5 from '../../assets/pdpJ5/pdpJ5.jpg'

const RightThHeader = () => {

  const openMenu = () => {
    const leftDiv = document.querySelector('.left-div')
    leftDiv.classList.add("leftDivOpen");
    leftDiv.classList.remove("leftDivClose");
  }

  return (
    <>
      <div className="right-header">
        <div className="info-chat">
          <div className="chat-image-div">
            <img
              src={FoundationImageJ5}
              alt="personimage"
            />
          </div>
          <div className="chat-div-title">
            <span>Foundation J5</span>
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
          <div className="circle circle-3" >
            <img src={RightHeaderThreeIcon} alt="info" />
            <img src={Burger} alt="burger" className="burger-image-menu" onClick={() => openMenu()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightThHeader;
