import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/dashboard");
  }
  return (
    <div>
      <h1>About Page</h1>
      <br />
      <button onClick={handleOnClick}>Move to DashBoard Page</button>
    </div>
  );
};

export default About;
