import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LeftDrawer from "../Components/LeftDrawer";
import TheTop from "../Components/TheTop";
import ToThRight from "../Components/ToThRight";

const Home = () => {
  const store = useSelector((store) => store.reducer);
  const { auth } = useSelector(store => store.reducer);
  const navigate = useNavigate();


  useEffect(() => {
    if (!auth) navigate("/login")
  }, []);

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
