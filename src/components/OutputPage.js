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
      <div className="statement-wrapper">
        <p className="statement">{cvState.statement}</p>
      </div>
      <div className="cv-subheader">Education</div>
      <div>
        <div className="section-container">
          {cvState.education.map((value, index) => (
            <div className="section-wrapper" key={index}>
              <div className="section-row">
                <div className="title">{value.degree}</div>
                <div className="side-detail">
                  {value.studyFrom} - {value.studyTo}
                </div>
              </div>
              <div className="section-row">
                <div className="sub-title">{value.uni}</div>
                <div className="side-detail">{value.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cv-subheader">Experience</div>
      <div>
        <div className="section-container">
          {cvState.experience.map((value, index) => (
            <div className="section-wrapper" key={index}>
              <div className="section-row">
                <div className="title">{value.jobTitle}</div>
                <div className="side-detail">
                  {value.workFrom} - {value.workTo}
                </div>
              </div>
              <div className="section-row">
                <div className="sub-title">{value.company}</div>
                <div className="side-detail">{value.location}</div>
              </div>
              <div className="section-row">
                <div className="summary">{value.summary}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cv-subheader">Skills</div>
      <div>
        <div className="section-container">
          {cvState.skill.map((value, index) => (
            <div className="section-wrapper" key={index}>
              <div className="section-row">
                <div className="title">{value.skillSet}</div>
                <div className="sub-title">{value.skill}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputPage;
