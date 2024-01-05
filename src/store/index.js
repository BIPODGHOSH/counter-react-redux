import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  let newState = state;

  if (action.type === "INCREMENT") {
    newState = { counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newState = { counter: state.counter - 1 };
  } else if (action.type === "ADD") {
    console.log(action.payload.value);
    newState = { counter: state.counter + Number(action.payload.value) };
  } else if (action.type === "SUBSTRACT") {
    newState = { counter: state.counter - Number(action.payload.value) };
  }
  return newState;
};

const counterStore = createStore(counterReducer);

export default counterStore;
