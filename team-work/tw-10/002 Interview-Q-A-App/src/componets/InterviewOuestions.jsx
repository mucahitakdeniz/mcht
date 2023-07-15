import data from "../helper/data.js";
import Card from "react-bootstrap/Card";
import { arrowdown } from "../helper/icons";
import { arrowup } from "../helper/icons";
import { useState } from "react";

const InterviewQuestions = () => {
  const newData = data.map((obj) => ({ ...obj, visible: false }));

  const [updatedData, setUpdatedData] = useState(newData);

  return (
    <>
      {updatedData.map((item) => {
        console.log(item);

        const toggleVisibility = () => {
          setUpdatedData((e) =>
            e.map((obj) =>
              obj.id === item.id ? { ...obj, visible: !obj.visible } : obj
            )
          );
        };

        return (
          <Card className="m-auto mt-5 card" key={item.id}>
            <Card.Header className="d-flex justify-content-between header">
              {item.id}.{item.question}
              <div onClick={toggleVisibility}>
                {item.visible ? arrowup : arrowdown}
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>{item.visible && item.answer}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default InterviewQuestions;
