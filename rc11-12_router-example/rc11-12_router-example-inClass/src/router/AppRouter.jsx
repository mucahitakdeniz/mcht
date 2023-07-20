import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Paths from "../pages/Paths";
import People from "../pages/People";
import PersonDetail from "../pages/PersonDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Fullstack from "../pages/Fullstack";
import AwsDevops from "../pages/AwsDevops";
import Next from "../pages/Next";
import React from "../pages/React";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import { useState } from "react";

const AppRouter = () => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Paths />}>
          <Route index element={<Fullstack />} />
          <Route path="fullstack" element={<Fullstack />}>
            <Route index element={<React />} />
            <Route path="next" element={<Next />} />
          </Route>
          <Route path="aws" element={<AwsDevops />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<PrivateRouter user={user} />}>
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />{" "}
        </Route>
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
