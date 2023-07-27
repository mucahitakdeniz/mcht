import React from "react";
import { CardButton, CardContainer, CardHeader, CardMedia } from "./Card.style";
import defaultImg from "../../assets/book.jpg";

const Card = ({ item }) => {
  const { volumeInfo } = item;
  return (
    <CardContainer>
      <CardHeader>{volumeInfo?.title}</CardHeader>
      <CardMedia
        src={volumeInfo?.imageLinks?.smallThumbnail || defaultImg}
        alt={volumeInfo?.title}
        title={volumeInfo?.title}
      />

      <CardButton>View More</CardButton>
    </CardContainer>
  );
};

export default Card;
