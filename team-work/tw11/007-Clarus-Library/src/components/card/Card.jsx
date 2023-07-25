import axios from "axios";
import { useEffect, useState } from "react";
const Card = ({ input, type }) => {
  const [cards, setCards] = useState([]);

  const getBooks = async () => {
    const BASE_URL = `https://www.googleapis.com/react/v1/volumes?q=still&printType=books&key=AIzaSyCvTpnIzXtadNKxNDhwpspdEa8l1rcidt4`;
    try {
      const { data } = await axios.get(BASE_URL);
      setCards(data.items);
    } catch (error) {
      console.log(error);
    }
    console.log(cards);
  };

  useEffect(() => {
    getBooks();
    console.log(cards);
  }, [input]);
  console.log(cards);

  return (
    <div className="card-container">
      {cards.map((book) => (
        <div className="card" key={book.id}>
          <img
            src={
              book.volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/128x196"
            }
            alt={book.volumeInfo.title}
          />
          <h2>{book.volumeInfo.title}</h2>
          <p>Country: {book.volumeInfo.country || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
