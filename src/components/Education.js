import React, { useState } from "react";
import "./styles/styles.css";
import TextField from "./fields/TextField";

const Education = ({ state: cvState, setState: setCvState }) => {
  const [education, setEducation] = useState({
    uni: "",
    degree: "",
    grade: "",
    studyFrom: "",
    studyTo: "",
  });

  const handleAddEducation = () => {
    setCvState((currentState) => {
      return {
        ...currentState,
        education: currentState.education.concat(education),
      };
    });

    setEducation({
      uni: "",
      degree: "",
      grade: "",
      studyFrom: "",
      studyTo: "",
    });
  };

  const handleDeleteEducation = (index) => {
    setCvState((currentState) => {
      // Remove the index from the array
      const newEducationArray = [...currentState.education];
      newEducationArray.splice(index, 1);
      // Return state object with education changed to updated array
      return { ...currentState, education: newEducationArray };
    });
  };

  const setEducationState = (fieldName, index, fieldState) => {
    setCvState((currentState) => {
      // Duplicating current global state education array
      const newEducationArray = [...currentState.education];
      // Find current index of array, and updating the field within
      newEducationArray[index] = {
        ...currentState.education[index],
        [fieldName]: fieldState()[fieldName],
      };
      return { ...currentState, education: newEducationArray };
    });
  };

  return (
    <div>
      <h1 className="input-heading">Education</h1>
      <div>
        {/* Render education fields for each one saved in memory to allow editing */}
        {cvState.education.map((value, index) => (
          <div key={index}>
            <div className="input-row">
              <TextField
                label="Degree"
                text="degree"
                state={cvState.education[index]}
                setState={(fieldState) => {
                  setEducationState("degree", index, fieldState);
                }}
              />
              <TextField
                label="From"
                text="studyFrom"
                state={cvState.education[index]}
                setState={(fieldState) => {
                  setEducationState("studyFrom", index, fieldState);
                }}
              />
              <TextField
                label="To"
                text="studyTo"
                state={cvState.education[index]}
                setState={(fieldState) => {
                  setEducationState("studyTo", index, fieldState);
                }}
              />
            </div>
            <div className="input-row">
              <TextField
                label="University"
                text="uni"
                state={cvState.education[index]}
                setState={(fieldState) => {
                  setEducationState("uni", index, fieldState);
                }}
              />
              <TextField
                label="Grade"
                text="grade"
                state={cvState.education[index]}
                setState={(fieldState) => {
                  setEducationState("grade", index, fieldState);
                }}
              />
            </div>
            <div className="btn-wrapper-delete">
              <button
                className="btn-delete"
                onClick={() => handleDeleteEducation(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Render initial education input form */}
      <div className="input-row">
        <TextField
          label="Degree"
          text="degree"
          state={education}
          setState={setEducation}
        />
        <TextField
          label="From"
          text="studyFrom"
          state={education}
          setState={setEducation}
        />
        <TextField
          label="To"
          text="studyTo"
          state={education}
          setState={setEducation}
        />
      </div>
      <div className="input-row">
        <TextField
          label="University"
          text="uni"
          state={education}
          setState={setEducation}
        />
        <TextField
          label="Grade"
          text="grade"
          state={education}
          setState={setEducation}
        />
      </div>
      <div className="btn-wrapper">
        <button className="btn" onClick={handleAddEducation}>
          Add to CV
        </button>
      </div>
    </div>
  );
};

export default Education;
