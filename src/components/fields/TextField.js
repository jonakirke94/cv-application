import React from "react";

const TextField = ({ text, state, setState }) => {
  const myChangeHandler = (event) => {
    setState((currentState) => {
      return { ...currentState, [text]: event.target.value };
    });
  };

  return (
    <form>
      <h1>Enter your {text}:</h1>
      <input type="text" onChange={myChangeHandler} value={state.value} />
    </form>
  );
};

export default TextField;
