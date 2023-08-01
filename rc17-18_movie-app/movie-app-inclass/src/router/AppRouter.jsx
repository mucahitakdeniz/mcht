import React from "react";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
>>>>>>> 9898a88abd112926860af26064910660e77326a2
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Routes>
<<<<<<< HEAD
    </>
=======
    </BrowserRouter>
>>>>>>> 9898a88abd112926860af26064910660e77326a2
  );
};

export default AppRouter;
