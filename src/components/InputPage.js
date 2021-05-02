import React from "react";
import "./styles/styles.css";
import CVHeader from "./CVHeader";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills"

const InputPage = ({ state: cvState, setState: setCvState }) => {
  return (
    <section className="input-page">
      <CVHeader state={cvState} setState={setCvState}></CVHeader>
      <Education state={cvState} setState={setCvState}></Education>
      <Experience state={cvState} setState={setCvState}></Experience>
      <Skills state={cvState} setState={setCvState}></Skills>

    </section>
  );
};

export default InputPage;
