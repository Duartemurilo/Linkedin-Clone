import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routers;
