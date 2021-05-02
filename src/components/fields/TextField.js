import React from "react";
import "../styles/styles.css";

const TextField = ({ label, text, state: cvState, setState: setCvState }) => {
  const myChangeHandler = (event) => {
    setCvState((currentState) => {
      return { ...currentState, [text]: event.target.value };
    });
  };

  return (
    <form>
      <p>{label}</p>
      <input type="text" onChange={myChangeHandler} value={cvState[text]} />
    </form>
  );
};

export default TextField;
