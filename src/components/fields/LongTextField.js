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
      <input
        className="long-input"
        type="text"
        onChange={myChangeHandler}
        value={state.value}
      />
    </form>
  );
};

export default LongTextField;
