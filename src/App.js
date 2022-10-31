import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateLogin from "./Pages/Create-Login";
import PrivateRoute from "./Components/PrivateRoute";
import { useSelector } from "react-redux";

const App = () => {
  const { auth } = useSelector(store => store.reducer)
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/create-elem" element={<CreateLogin />} />
      <Route exact path="*" element={<h1> not found</h1>} />
    </Routes >
  );
};

export default App;
