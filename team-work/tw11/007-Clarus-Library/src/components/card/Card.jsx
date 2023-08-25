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
      console.log(cards);
    } catch (error) {
      console.log(error);
    }
    console.log(cards);
  };

  useEffect(() => {
    getBooks();
    console.log(cards);
  }, [input, type]);
  // useEffect(() => {
  //   getBooks();
  //   console.log(cards);
  // }, [type]);
  const img =
  console.log(cards);

  return (
    <div className="card-container books">
      {cards.map((book) => (
        <div className="card" key={book.id}>
          <div>
            <h2 className="text-danger">{book.volumeInfo.title}</h2>
<img src=".../assets/" alt="" />
            <h3>
              Author:
              <span className="text-danger">{book?.volumeInfo?.authors}</span>
            </h3>
          </div>

          <img
            src={
              book.volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/128x196"
            }
            alt={book.volumeInfo.title}
          />
                    <div> {img || <p>{book?.searchInfo?.textSnippet}}</p>} </div>

        </div>
      ))}
    </div>
  );
};

export default Card;
