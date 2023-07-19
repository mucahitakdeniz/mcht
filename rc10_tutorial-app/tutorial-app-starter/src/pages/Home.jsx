import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const Base_Url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  const getTutorials = async () => {
    try {
      const { data } = await axios(Base_Url);
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);
  return (
    <>
      <AddTutorial tutorials={tutorials} setTutorials={setTutorials} />
      <TutorialList
        tutorials={tutorials}
        setTutorials={setTutorials}
        Base_Url={Base_Url}
      />
    </>
  );
};

export default Home;
