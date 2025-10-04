import React from "react";
import { useParams } from "react-router-dom";

const ParamCompo = () => {
  const { id } = useParams();
  return <div>Params:{id}</div>;
};

export default ParamCompo;
