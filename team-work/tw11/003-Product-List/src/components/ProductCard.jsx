import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ProductCard = () => {
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

  return (
    <>
      <div className="row m-auto">
        {prod.map((item) => (
          <div className="col-xs-12 col-sm-6  col-md-4 col-lg-3 text-center">
            <Card key={item.id} className="cards" style={{ width: "18rem" }}>
              <Card.Img src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
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
        ))}
      </div>
    </>
  );
};

export default ProductCard;
