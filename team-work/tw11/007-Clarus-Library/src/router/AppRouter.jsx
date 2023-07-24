import { Route, Routes} from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" elements={<Home />} />
        <Route path="/about" elements={<About/>} />
      </Routes>
    </div>
  );
};

export default AppRouter;
