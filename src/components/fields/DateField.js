import React from "react";
import "../styles/styles.css";

const DateField = ({ label, text, state, setState }) => {
  const myChangeHandler = (event) => {
    setState((currentState) => {
      return { ...currentState, [text]: event.target.value };
    });
  };

  return (
    <form>
      <p>{label}</p>
      <input
        className="date"
        type="date"
        onChange={myChangeHandler}
        value={state.value}
      />
    </form>
  );
};

export default DateField;
