import React, { useEffect } from "react";
import { useState } from "react";
const User = () => {
  const [userDate, setUserDate] = useState("");
  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUserDate(data.results[0]))
      .then((err) => console.log(err));
  };
 
  useEffect (()=>{
  getUser()  
  
  },[])
  return (
    <div>
      <img
        src={userDate?.picture?.large}
        alt=""
        className="rounded-circle"
      />
      <h4>Hi, My name is</h4>
      <h1>
        {userDate?.name?.first} {userDate?.name?.last}
      </h1>
      <h3>{userDate?.email}</h3>
      <h4>{userDate?.dob?.date}</h4>
      <h5>{userDate?.cell}</h5>
      <h6>{userDate?.location?.city}</h6>
      <button onClick={getUser}>Get Random User</button>
    </div>
  );
};

export default User;
