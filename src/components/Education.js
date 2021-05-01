import React, { useState } from "react";
import "./styles/styles.css";
import TextField from "./fields/TextField";
import LongTextField from "./fields/LongTextField";
import TelField from "./fields/TelField";

const Education = ({ state, setState }) => {
  const [education, setEducation] = useState({
    uni: "",
    degree: "",
    grade: "",
    studyFrom: "",
    studyTo: "",
  });

  const handleAddEducation = () => {
    setState((currentState) => {
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

  const setEducationState = (fieldName, index, fieldState) => {
    setState((currentState) => {
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
        {state.education.map((value, index) => (
          <div key={index}>
            <div className="input-row">
              <TextField
                label="Degree"
                text="degree"
                state={state.education[index]}
                setState={(fieldState) => {
                  setEducationState("degree", index, fieldState);
                }}
              />
              <TextField
                label="University"
                text="uni"
                state={state.education[index]}
                setState={(fieldState) => {
                  setEducationState("uni", index, fieldState);
                }}
              />
            </div>
            <div className="input-row">
              <TextField
                label="Grade"
                text="grade"
                state={state.education[index]}
                setState={(fieldState) => {
                  setEducationState("grade", index, fieldState);
                }}
              />
              <TextField
                label="From"
                text="studyFrom"
                state={state.education[index]}
                setState={(fieldState) => {
                  setEducationState("studyFrom", index, fieldState);
                }}
              />
              <TextField
                label="To"
                text="studyTo"
                state={state.education[index]}
                setState={(fieldState) => {
                  setEducationState("studyTo", index, fieldState);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="input-row">
        <TextField
          label="Degree"
          text="degree"
          state={education}
          setState={setEducation}
        />
        <TextField
          label="University"
          text="uni"
          state={education}
          setState={setEducation}
        />
      </div>
      <div className="input-row">
        <TextField
          label="Grade"
          text="grade"
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
      <button onClick={handleAddEducation}>Add another</button>
    </div>
  );
};

export default Education;
