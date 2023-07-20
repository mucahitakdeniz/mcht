import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import People from "../pages/People";
import NotFound from "../pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Paths from "../pages/Paths";
import PersonDetail from "../pages/PersonDetail";
import Fullstack from "../pages/Fullstack";
import AwsDevops from "../pages/AwsDevops";

export const AppRouter = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Paths />} />
            <Route path="/fullstack" element={<Fullstack />} />
            <Route path="/awsdevops" element={<AwsDevops />} />
        <Route />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
