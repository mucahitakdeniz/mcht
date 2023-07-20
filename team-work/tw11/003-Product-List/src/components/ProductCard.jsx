import axios from "axios";
const ProductCard = () => {
  const postProducts = async (products) => {
    const Base_Url = "https://fakestoreapi.com/products/";
    try {
      const res = await axios(Base_Url);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return <>
  res?.map((e)=>{
    return (
        <>
        <h1>{e.title}</h1>
        <img src={e.image} alt="" />
        </>
    )
  })
  </>

};

export default ProductCard;
