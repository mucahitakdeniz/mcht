import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";


const Header = ({ setFilt }) => {
  const [categorys, setCategorys] = useState([]);
  const postCategories = async () => {
    const Base_Url = " https://fakestoreapi.com/products/categories/";
    try {
      const { data } = await axios.get(Base_Url);
      setCategorys([...data]);
    } catch (error) {
      console.log(error);
    }
    console.log(categorys);
  };
  useEffect(() => {
    postCategories();
  }, []);
  return (
    <>
      <h1 className="text-center mt-5 ">Products List</h1>
      <div className="container">
        <div className="row text-center m-1">
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-1 "
            onClick={() => setFilt("")}
          >
            ALL
          </Button>
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-2 "
            onClick={() => setFilt(categorys[0])}
          >
            ELECTRONİCS
          </Button>
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-2"
            onClick={() => setFilt(categorys[1])}
          >
            jEWELERY
          </Button>
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-2"
            onClick={() => setFilt(categorys[2])}
          >
            MEN'S CLOTHİNG
          </Button>
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-3"
            onClick={() => setFilt(categorys[3])}
          >
            WOMEN'S CLOTHİNG
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
