import React from "react";
import "./styles/styles.css";
import CVHeader from "./CVHeader";
import Education from "./Education";

const InputPage = ({ state, setState }) => {
  return (
    <section className="input-page">
      <CVHeader state={state} setState={setState}></CVHeader>
      <Education state={state} setState={setState}></Education>
    </section>
  );
};

export default InputPage;
