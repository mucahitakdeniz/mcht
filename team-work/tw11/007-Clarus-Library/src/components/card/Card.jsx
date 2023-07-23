import axios from "axios";
const Card = () => {


  const getBooks = async () =>{
    const BASE_URL="https://www.googleapis.com/books/v1/volumes?q=react&printType=books&key=AIzaSyCvTpnIzXtadNKxNDhwpspdEa8l1rcidt4"
    try {
      const {data} = await axios.get(BASE_URL)

    }
  } 
  return (
    <div>Card</div>

    
  )
}

export default Card