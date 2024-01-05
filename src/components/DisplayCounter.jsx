import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <p className="lead mb-4">
      Current count is: <strong>{counter}</strong>
    </p>
  );
};

export default DisplayCounter;
