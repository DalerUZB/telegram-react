import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  );
};

export default App;
