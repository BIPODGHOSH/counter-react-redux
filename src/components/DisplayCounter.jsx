import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <p className="lead mb-4">
      Current count is: <strong>{counterVal}</strong>
    </p>
  );
};

export default DisplayCounter;
