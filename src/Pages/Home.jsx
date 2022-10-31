import React from "react";
import { useSelector } from "react-redux";
import LeftDrawer from "../Components/LeftDrawer";
import TheTop from "../Components/TheTop";
import ToThRight from "../Components/ToThRight";

const Home = () => {
  const store = useSelector((store) => store.reducer);
  console.log(store.messages);
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
