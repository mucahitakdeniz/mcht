import data from "../helper/data.js";
import Card from "react-bootstrap/Card";
import { arrowdown } from "../helper/icons";
import { arrowup } from "../helper/icons";
import { useState } from "react";

const InterviewOuestions = () => {
  const [icon, setIcon] = useState("true");
  const handleIcon = () => {
    setIcon(!icon);
  };
  return (
    <>
      {data.map((item) => {
        return (
          <Card className="card m-auto mt-5" key={item.id}>
            <Card.Header className="bg-secondary d-flex justify-content-between ">
              {item.question}
              <div onClick={handleIcon} className="">
                {icon ? arrowdown : arrowup}
              </div>
            </Card.Header>
            <Card.Body className="bg-danger-subtle">
              <Card.Text>{item.answer}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default InterviewOuestions;
