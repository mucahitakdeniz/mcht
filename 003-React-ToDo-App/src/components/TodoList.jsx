import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const arraylist = () => {
    const x = [...todoArray];
    console.log(x);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleClick = (e) => {
    {
      input && setTodoArray([...todoArray, input]);
    }
    setInput("");
  };

  const myTimeout = setTimeout(arraylist, 100);

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
      <h2 className="text-center fs-1">Todos</h2>

      {todoArray.map((item, i) => (
        <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end d-flex justify-content-between">
          <p>
            {i + 1}.{item}{" "}
          </p>
          <a>🗑</a>
        </div>
      ))}
    </>
  );
};

export default TodoList;
