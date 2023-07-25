import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Card from "../components/card/Card";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Anasayfa içindeki rotaları tanımlayan üst rota */}
        <Route path="/" element={<Home/>} >
          {/* /header yolunda Header bileşenini render edecek alt rota */}
          <Route path="/header" element={<Header/>} />
          {/* /card yolunda Card bileşenini render edecek alt rota */}
          <Route path="/card" element={<Card/>} />
        </Route>
        {/* Diğer sayfalar için ayrı rotalar */}
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
