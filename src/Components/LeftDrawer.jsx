import React from "react";
import SearchIcon from "../assets/searchIcon/Vector.svg";
import ImageBurger from "../assets/burger/Shape.svg";

const LeftDrawer = () => {
  return (
    <>
      <div className="left-div">
        <div className="left-header-div">
          <div className="image-burger">
            <img src={ImageBurger} alt="image burger" />
          </div>
          <span>Chats</span>
        </div>
        <div className="input-div">
          <span>
            <input type="text" placeholder="Search" />
            <img src={SearchIcon} alt="search" />
          </span>
        </div>
        <div className="div-component">
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
              <span className="title">Sweetie</span>
              <span className="description">I love you so much!</span>
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
