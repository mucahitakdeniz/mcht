import { useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";

const Home = () => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("ALL");

  return (
    <>
      <Header setInput={setInput} setType={setType} />
      <Card input={input} type={type} />
    </>
  );
};

export default Home;
