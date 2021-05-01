import React from "react";
import "../styles/styles.css";

const TelField = ({ label, text, state, setState }) => {
  const myChangeHandler = (event) => {
    setState((currentState) => {
      return { ...currentState, [text]: event.target.value };
    });
  };

  return (
    <form>
      <p>{label}</p>
      <input
        type="tel"
        onChange={myChangeHandler}
        value={state.value}
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      />
    </form>
  );
};

export default TelField;
