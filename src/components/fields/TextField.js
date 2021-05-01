import React from "react";
import "../styles/styles.css";

const TextField = ({ label, text, state, setState }) => {
  const myChangeHandler = (event) => {
    setState((currentState) => {
      return { ...currentState, [text]: event.target.value };
    });
  };

  return (
    <form>
      <p>{label}</p>
      <input type="text" onChange={myChangeHandler} value={state[text]} />
    </form>
  );
};

export default TextField;
