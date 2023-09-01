import React, { useContext } from "react";
import { UserStack } from "./App";

const FunOne = () => {
  const userTecStack = useContext(UserStack);
  // console.log(userTecStack);
  return <div>my teckstack is {userTecStack}</div>;
};

export default FunOne;
