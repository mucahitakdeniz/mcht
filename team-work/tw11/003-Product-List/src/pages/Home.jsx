import Header from "../components/Header";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [filt, setFilt] = useState("");
  const Product_Category = "https://fakestoreapi.com/products/categories/";
  const Product_List = "https://fakestoreapi.com/products";
  return (
    <>
      <Header setFilt={setFilt} />
      <ProductCard filt={filt} />
    </>
  );
};

export default Home;
