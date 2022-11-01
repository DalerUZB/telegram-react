import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateLogin from "./Pages/Create-Login";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={
        <PrivateRoute>
          <Login />
        </PrivateRoute>
      } />
      <Route exact path="/create-login" element={
        <PrivateRoute>
          <CreateLogin />
        </PrivateRoute>
      } />
      <Route exact path="*" element={<h1> not found</h1>} />
    </Routes >
  );
};

export default App;
