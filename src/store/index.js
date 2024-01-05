// redux-toolkit

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    substraction: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export default counterStore;

// redux

// import { createStore } from "redux";

// const INITIAL_STATE = {
//   counter: 0,
// };

// const counterReducer = (state = INITIAL_STATE, action) => {
//   let newState = state;

//   if (action.type === "INCREMENT") {
//     newState = { counter: state.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     newState = { counter: state.counter - 1 };
//   } else if (action.type === "ADD") {
//     console.log(action.payload.value);
//     newState = { counter: state.counter + Number(action.payload.value) };
//   } else if (action.type === "SUBSTRACT") {
//     newState = { counter: state.counter - Number(action.payload.value) };
//   }
//   return newState;
// };

// const counterStore = createStore(counterReducer);

// export default counterStore;
