import React from "react";
import "./styles/styles.css";
import CVHeader from "./CVHeader";
import Education from "./Education";
import Experience from "./Experience";

const InputPage = ({ state: cvState, setState: setCvState }) => {
  return (
    <section className="input-page">
      <CVHeader state={cvState} setState={setCvState}></CVHeader>
      <Education state={cvState} setState={setCvState}></Education>
      <Experience state={cvState} setState={setCvState}></Experience>
    </section>
  );
};

export default InputPage;
