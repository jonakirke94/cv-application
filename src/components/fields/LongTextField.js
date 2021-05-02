import React from "react";
import "../styles/styles.css";

const LongTextField = ({
  label,
  text,
  state: cvState,
  setState: setCvState,
}) => {
  const myChangeHandler = (event) => {
    setCvState((currentState) => {
      return { ...currentState, [text]: event.target.value };
    });
  };

  return (
    <form>
      <p>{label}</p>
      <textarea className="long-input" type="text" onChange={myChangeHandler}>
        {cvState[text]}
      </textarea>
    </form>
  );
};

export default LongTextField;
