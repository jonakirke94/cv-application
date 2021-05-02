import React from "react";
import "./styles/styles.css";

const OutputPage = ({ state: cvState, setState: setCvState }) => {
  //   const { name, email, phone } = state;

  return (
    <section className="output-page">
      <div className="cv-header">
        <h1 className="cv-heading">{cvState.name}</h1>
        <div className="contact-details">
          <div>{cvState.location}</div>
          <div>{cvState.phone}</div>
          <div>{cvState.email}</div>
        </div>
      </div>
      <div className="cv-header">
        <p className="statement">{cvState.statement}</p>
      </div>
      <div className="cv-subheader">Education</div>
      <div>
        <div className="education-wrapper">
          {cvState.education.map((value, index) => (
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
      <div>
        <div className="education-wrapper">
          {cvState.experience.map((value, index) => (
            <div className="education-details" key={index}>
              <div>{value.jobTitle}</div>
              <div>{value.company}</div>
              <div>
                {value.workFrom} - {value.workTo}
              </div>
              <div className="education-details">{value.summary}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputPage;
