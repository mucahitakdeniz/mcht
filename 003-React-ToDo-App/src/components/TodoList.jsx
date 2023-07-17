import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { v4 as uuid4 } from "uuid";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    {
      const newTodo = {
        id: uuid4,
        text: input,
      };
      setTodoArray([...todoArray, newTodo]);
    }
    setInput("");
  };
  const handleDelete = (id) => {
    setTodoArray(todoArray.filter((item) => item.id !== id));
  };

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
      <div className="container list  ">
        {todoArray.map((item, i) => (
          <div
            class="p-3 bg-info bg-opacity-10 border border-info  rounded-end d-flex justify-content-between w-75 listElement"
            key={item.id}
          >
            <p>
              {i + 1}.{item.text}
            </p>
            <button className=" border" onClick={() => handleDelete(item.id)}>
              🗑
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
