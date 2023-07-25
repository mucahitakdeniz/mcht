import { Route, Routes} from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" elements={<Home />} />
        <Route path="/about" elements={<About/>} />
        <Route path="/detail" elements={<Detail />} />
        <Route path="/register" elements={<Register/>} />
        <Route path="/login" elements={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
