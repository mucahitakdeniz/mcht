import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ProductCard = ({ filt }) => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    postProducts();
  }, []);

  const postProducts = async () => {
    const Base_Url = "https://fakestoreapi.com/products";
    try {
      const { data } = await axios.get(Base_Url);
      setProd(data);
    } catch (error) {
      console.log(error);
    }
  };
  const price = (e) => {
    let x = +e.rate;
    let y = +e.count;
    return y + (y / 100) * x;
  };

  return (
    <>
      <div className="row m-auto">
        {prod
          .filter((e) => (filt ? e.category === filt : e))
          .map((item) => {
            let pPrice = price(item.rating);
            console.log(pPrice);
            return (
              <div
                key={item.id}  
                className="col-xs-12 col-sm-6  col-md-4 col-lg-3 text-center"
              >
                <Card style={{ width: "18rem" }}></Card>
                <Card
                  key={item.id}
                  className="cards"
                  style={{ width: "18rem" }}
                >
                  <Card.Img src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text> {pPrice} $</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductCard;
