import "./App.css";
import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            <DisplayCounter />
            <Controls />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
