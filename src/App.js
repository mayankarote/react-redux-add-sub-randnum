import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addition, square, substraction } from "./actions";

function App() {
  const resultReducer = useSelector((state) => state.resultReducer);
  const loggedReducer = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  console.log(resultReducer);

  return (
    <div className="App">
      <h1
        style={{
          color: "black",
          margin: 25,
          fontSize: 40,
        }}
      >
        Result
        <h2
          style={{
            color: "red",
            margin: 25,
            fontSize: 40,
          }}
        >
          {resultReducer}
        </h2>
      </h1>
      <button
        onClick={() => dispatch(addition(5))}
        style={{
          backgroundColor: "black",
          color: "white",
          margin: 25,
          padding: 20,
          fontSize: 20,
        }}
      >
        Addition
      </button>
      <button
        onClick={() => dispatch(substraction())}
        style={{
          backgroundColor: "yellow",
          margin: 25,
          padding: 20,
          fontSize: 20,
        }}
      >
        Substraction
      </button>
      <button
        onClick={() => dispatch(square(resultReducer))}
        style={{
          backgroundColor: "black",
          color: "white",
          margin: 25,
          padding: 20,
          fontSize: 20,
        }}
      >
        multiply {resultReducer} by itself
      </button>
      {loggedReducer}
    </div>
  );
}

export default App;
