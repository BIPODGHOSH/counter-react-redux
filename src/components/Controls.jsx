import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const handleAdd = () => {
    inputRef.current.value;
    dispatch({
      type: "ADD",
      payload: {
        value: inputRef.current.value,
      },
    });
    inputRef.current.value = "";
  };

  const handleSubstract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        value: inputRef.current.value,
      },
    });
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={increment}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={decrement}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center input-container">
        <button
          type="button"
          className="btn btn-info"
          onClick={handleSubstract}
        >
          Substract
        </button>
        <input
          type="number"
          className="input-box"
          placeholder="Enter number"
          ref={inputRef}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default Controls;
