import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
const TodoList = () => {
  let count = 0;
  let array = [];
  const [input, setInput] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const handleClick = (e) => {
    setTodoArray(array.push(input))
    setInput("")

  
    
  };
  return (
    <>
      <InputGroup className="text-center m-auto mb-3" style={{ width: "80%" }}>
        <Form.Control
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new todo"
          value={input}
        />
        <Button
          type="submit"
          onClick={handleClick}
          variant="text-light bg-success"
          id="button"
        >
          Add Todo
        </Button>
      </InputGroup>
      <h2 className="text-center fs-1">Todos</h2>
      {/* {x.map((e) => {
        return <h1>{e}</h1>;
      })} */}
    </>
  );
};

export default TodoList;
