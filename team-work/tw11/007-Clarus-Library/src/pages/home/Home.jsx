import { useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";

const Home = () => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("all");

  return (
    <>
      <Header setInput={setInput} type={type} setType={setType} />
      <Card input={input} type={type} />
    </>
  );
};

export default Home;
