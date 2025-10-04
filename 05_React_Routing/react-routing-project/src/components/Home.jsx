import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate("/about");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <br></br>
      <button onClick={handleOnClick}>Move to About Page</button>
    </div>
  );
};

export default Home;
