import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Children, useState } from "react";
import data from "../helper/data";
const TodoList = () => {
  let x = [];
  const myTimeout = setTimeout(arraylist, 100);
  const arraylist = () => {
    x = [...TodoList];
  };
  const [input, setInput] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleClick = (e) => {
    setTodoArray([...todoArray, input]);
    setInput("");
  };
}
return (
  <>
    <InputGroup className="text-center m-auto mb-3" style={{ width: "80%" }}>
      <Form.Control
        onChange={handleChange}
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
    <h2 className="text-center fs-1">Todos {input}</h2>
  </>
)

export default TodoList;
