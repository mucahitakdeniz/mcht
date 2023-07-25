import axios from "axios";
import { useEffect, useState } from "react";
const Card = ({ input, type }) => {
  const [cards, setCards] = useState([]);

  const getBooks = async () => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&printType=${type}&key=AIzaSyCvTpnIzXtadNKxNDhwpspdEa8l1rcidt4`
      );
      setCards(data.items);
    } catch (error) {
      console.log(error);
    }
    console.log(cards);
  };

  useEffect(() => {
    getBooks();
    console.log(cards);
  }, [input, type]);
  console.log(cards);

  return (
    <div className="card-container books">
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
