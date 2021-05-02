import React, { useState } from "react";
import "./styles/styles.css";
import TextField from "./fields/TextField";
import LongTextField from "./fields/LongTextField";

const Experience = ({ state: cvState, setState: setCvState }) => {
  const [experience, setExperience] = useState({
    jobTitle: "",
    company: "",
    workFrom: "",
    workTo: "",
    summary: "",
  });

  const handleAddExperience = () => {
    setCvState((currentState) => {
      return {
        ...currentState,
        experience: currentState.experience.concat(experience),
      };
    });

    setExperience({
      jobTitle: "",
      company: "",
      workFrom: "",
      workTo: "",
      summary: "",
    });
  };

  const handleDeleteExperience = (index) => {
    setCvState((currentState) => {
      // Remove the index from the array
      const newExperienceArray = currentState.experience.splice(index, 1);
      // Return state object with experience changed to updated array
      return { ...currentState, experience: newExperienceArray };
    });
  };

  const setExperienceState = (fieldName, index, fieldState) => {
    setCvState((currentState) => {
      // Duplicating current global state experience array
      const newExperienceArray = [...currentState.experience];
      // Find current index of array, and updating the field within
      newExperienceArray[index] = {
        ...currentState.experience[index],
        [fieldName]: fieldState()[fieldName],
      };
      return { ...currentState, experience: newExperienceArray };
    });
  };

  return (
    <div>
      <h1 className="input-heading">Experience</h1>
      <div>
        {/* Render experience fields for each one saved in memory to allow editing */}
        {cvState.experience.map((value, index) => (
          <div key={index}>
            <div className="input-row">
              <TextField
                label="Job Title"
                text="jobTitle"
                state={cvState.experience[index]}
                setState={(fieldState) => {
                  setExperienceState("jobTitle", index, fieldState);
                }}
              />
              <TextField
                label="Company"
                text="company"
                state={cvState.experience[index]}
                setState={(fieldState) => {
                  setExperienceState("company", index, fieldState);
                }}
              />
            </div>
            <div className="input-row">
              <TextField
                label="From"
                text="workFrom"
                state={cvState.experience[index]}
                setState={(fieldState) => {
                  setExperienceState("workFrom", index, fieldState);
                }}
              />
              <TextField
                label="To"
                text="workTo"
                state={cvState.experience[index]}
                setState={(fieldState) => {
                  setExperienceState("workTo", index, fieldState);
                }}
              />
            </div>
            <div className="input-row">
              <LongTextField
                label="Summary"
                text="summary"
                state={cvState.experience[index]}
                setState={(fieldState) => {
                  setExperienceState("summary", index, fieldState);
                }}
              />
            </div>
            <div className="btn-wrapper">
              <button
                className="btn"
                onClick={() => handleDeleteExperience(index)}
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
          label="Job Title"
          text="jobTitle"
          state={experience}
          setState={setExperience}
        />
        <TextField
          label="Company"
          text="company"
          state={experience}
          setState={setExperience}
        />
      </div>
      <div className="input-row">
        <TextField
          label="From"
          text="workFrom"
          state={experience}
          setState={setExperience}
        />
        <TextField
          label="To"
          text="workTo"
          state={experience}
          setState={setExperience}
        />
      </div>
      <div className="input-row">
        <LongTextField
          label="Summary"
          text="summary"
          state={experience}
          setState={setExperience}
        />
      </div>
      <div className="btn-wrapper">
        <button className="btn" onClick={handleAddExperience}>
          Add to CV
        </button>
      </div>
    </div>
  );
};

export default Experience;
