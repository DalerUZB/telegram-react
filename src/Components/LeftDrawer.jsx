import React from "react";
import SearchIcon from "../assets/searchIcon/Vector.svg";
import ImageBurger from "../assets/burger/Shape.svg";
import ChromeClose from "../assets/images/ChromeClose.svg";
import FoundationImageJ5 from '../assets/pdpJ5/pdpJ5.jpg'
import person1 from '../assets/pdpJ5/person-1.jpeg'
import person2 from '../assets/pdpJ5/person-2.jpeg'
import person3 from '../assets/pdpJ5/person-3.jpeg'
import person4 from '../assets/pdpJ5/person-4.jpeg'
import person5 from '../assets/pdpJ5/person-5.jpg'
import person6 from '../assets/pdpJ5/person-6.jpg'
import "./Drawer.css";

import { useDispatch } from "react-redux";
import { changingFunc, logOutStorage } from "../store/reducer";

import { useNavigate } from "react-router-dom";
import { fetchDataMessages } from "../store/action";
import moment from "moment/moment";

const LeftDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = localStorage.getItem('username')

  const imageBurgerFunc = () => {
    const Drawer = document.querySelector(".Drawer");
    Drawer.classList.add("block");
    Drawer.classList.remove("none");
  };

  const returnBack = () => {
    const Drawer = document.querySelector(".Drawer");
    Drawer.classList.remove("block");
    Drawer.classList.add("none");
  };

  const showChatSeeFunc = () => {
    dispatch(changingFunc());
    dispatch(fetchDataMessages());
  };

  const logOut = () => {
    dispatch(logOutStorage());
    navigate("/login");
  };

  const closeAllDrawer = () => {
    const leftDiv = document.querySelector('.left-div')
    leftDiv.classList.remove("leftDivOpen");
    leftDiv.classList.add("leftDivClose");
  }

  const GetMessage = () => {
    dispatch(changingFunc());
    dispatch(fetchDataMessages())
  }

  return (
    <>
      <div className="miniLeftDiv">
        <div>
          <img src={FoundationImageJ5} alt="foundation" onClick={() => GetMessage()} />
        </div>


      </div>
      <div className="left-div">
        <span className="forResponsive">
          <img src={ChromeClose} alt="close" className="closeAllDrawer" onClick={() => closeAllDrawer()} />
        </span>
        <div className="left-header-div">
          <div className="image-burger" onClick={(e) => imageBurgerFunc(e)}>
            <img src={ImageBurger} alt="imageburger" />
          </div>
          <div className="Drawer">
            <div className="drawerImg">
              <img
                src={ChromeClose}
                alt="x"
                className="returnHome"
                onClick={(e) => returnBack(e)}
              />
            </div>
            <div className="logOutDiv">
              <h1>{username}</h1>
              <button onClick={() => logOut()}>Log Out</button>
            </div>
          </div>
          <span>Chats</span>
        </div>
        <div className="input-div">
          <span>
            <input type="text" placeholder="Search" />
            <img src={SearchIcon} alt="search" />
          </span>
        </div>
        <div className="div-component" onClick={() => showChatSeeFunc()}>
          <div className="image-info-div">
            <div className="image-div-radius">
              <img
                className="image-person"
                src={FoundationImageJ5}
                alt="photo"
              />
            </div>
            <span className="radiusGreen"></span>
            <div className="parent-div-description">
              <span className="title">Foundation J5</span>
              <span className="description">group</span>
            </div>
          </div>

          <div className="clock-info-div">
            <span>{moment().startOf('hour').fromNow()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftDrawer;
