import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateLogin from "./Pages/Create-Login";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/create-login" element={<CreateLogin />} />
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  );
};

export default App;
