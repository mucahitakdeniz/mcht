import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    sessionStorage.setItem("user", JSON.stringify({ username, password }));
    navigate("/");
    console.log(username, password);
  };

  const getUsers = () => {
    fetch("https://64ba3cb05e0670a501d5d865.mockapi.io/user")
      .then((res) => res.json())
      .then((data) => {
        islem(data);
      })
      .catch((err) => console.log(err));
  };

  const islem = (gelendeger) => {
    gelendeger.map((item)=>
   { if (username===item.username &&password===item.password )})

    
  };
  getUsers();
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
