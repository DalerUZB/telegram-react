import React from "react";
import SearchIcon from "../assets/searchIcon/Vector.svg";
import ImageBurger from "../assets/burger/Shape.svg";
import ChromeClose from "../assets/images/ChromeClose.svg";
import "./Drawer.css";
import { useDispatch } from "react-redux";
import { changingFunc } from "../store/reducer";
import { fetchDataMessages } from "../store/action";
const LeftDrawer = () => {
  const dispatch = useDispatch();
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
    dispatch(fetchDataMessages("/messages", "get"));
  };

  return (
    <>
      <div className="left-div">
        <div className="left-header-div">
          <div className="image-burger" onClick={(e) => imageBurgerFunc(e)}>
            <img src={ImageBurger} alt="image burger" />
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
              <button>Log Out</button>
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
                src="https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg"
                alt="image"
              />
            </div>
            <span className="radiusGreen"></span>
            <div className="parent-div-description">
              <span className="title">Foundation J5</span>
              <span className="description">group</span>
            </div>
          </div>

          <div className="clock-info-div">
            <span>8:32 PM</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftDrawer;
