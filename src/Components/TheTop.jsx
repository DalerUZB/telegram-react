import React from "react";
import MiniMize from "../assets/images/ChromeMinimize.svg";
import MaxiMize from "../assets/images/ChromeMaximize.svg";
import ChromeClose from "../assets/images/ChromeClose.svg";

const TheTop = () => {
  return (
    <>
      <header>
        <span>Unigram New</span>
        <div className="images">
          <img src={MiniMize} alt="minus" />
          <img src={MaxiMize} alt="cvadrat" />
          <img src={ChromeClose} alt="x" />
        </div>
      </header>
    </>
  );
};

export default TheTop;
