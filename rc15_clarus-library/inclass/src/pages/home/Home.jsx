import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { HomeContainer, HomeImg, CardContainer } from "./Home.style";
import homeImg from "../../assets/books.jpg";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeImg>
        <img src={homeImg} alt="" />
      </HomeImg>
      <CardContainer>
        <Card />
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
