import React from "react";
import LeftDrawer from "../Components/LeftDrawer";
import TheTop from "../Components/TheTop";
import ToThRight from "../Components/ToThRight";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <TheTop />
          <div className="wrapper-two-div">
            <LeftDrawer />
            <ToThRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
