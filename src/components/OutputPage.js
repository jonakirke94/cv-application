import React from "react";
import "./styles/styles.css";

const OutputPage = ({ state, setState }) => {
  //   const { name, email, phone } = state;

  return (
    <section className="output-page">
      <div className="cv-header">
        <h1 className="cv-heading">{state.name}</h1>
        <div className="contact-details">
          <div>{state.location}</div>
          <div>{state.phone}</div>
          <div>{state.email}</div>
        </div>
      </div>
      <div className="cv-header">
        <p className="statement">{state.statement}</p>
      </div>
      <div className="cv-subheader">Education</div>
      <div>
        <div className="education-wrapper">
          {state.education.map((value, index) => (
            <div className="education-details" key={index}>
              <div>{value.degree}</div>
              <div>{value.uni}</div>
              <div>
                {value.studyFrom} - {value.studyTo}
              </div>
              <div className="education-details">{value.grade}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputPage;
