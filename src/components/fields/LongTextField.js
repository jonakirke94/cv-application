import React from "react";
import "../styles/styles.css";

const LongTextField = ({ label, text, state, setState }) => {
  const myChangeHandler = (event) => {
    setState((currentState) => {
      return { ...currentState, [text]: event.target.value };
    });
  };

  return (
    <form>
      <p>{label}</p>
      <textarea className="long-input" type="text" onChange={myChangeHandler}>
        {state.value}
      </textarea>
    </form>
  );
};

export default LongTextField;
