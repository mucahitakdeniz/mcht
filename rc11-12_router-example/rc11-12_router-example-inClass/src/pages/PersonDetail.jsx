import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import NotFound from "./NotFound";
import { second as spi } from "../img/Spinner-2.gif";

const PersonDetail = () => {
  // let { state: person } = useLocation();
  let navigate = useNavigate();
  // console.log(person);
  let { id } = useParams();
  console.log(id);
  const [person, setPerson] = useState({});
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPerson = () => {
    axios(`https://reqres.in/api/users/${id}`)
      .then((res) => setPerson(res.data.data))
      .catch((err) => {
        SetError(true);
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getPerson();
  }, []);
  if (error) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div className="text-center mt-4">
        <img src="spi" alt="" />
      </div>
    );
  }

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
