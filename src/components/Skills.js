import React, { useState } from "react";
import "./styles/styles.css";
import TextField from "./fields/TextField";

const Skills = ({ state: cvState, setState: setCvState }) => {
  const [skill, setSkill] = useState({
    skillSet: "",
    skill:""
  });

  const handleAddSkill = () => {
    setCvState((currentState) => {
      return {
        ...currentState,
        skill: currentState.skill.concat(skill),
      };
    });

    setSkill({
      skill: "",
    });
  };

  const handleDeleteSkill = (index) => {
    setCvState((currentState) => {
      // Remove the index from the array
      const newSkillArray = [...currentState.skill];
      newSkillArray.splice(index, 1);
      // Return state object with skill changed to updated array
      return { ...currentState, skill: newSkillArray };
    });
  };

  const setSkillState = (fieldName, index, fieldState) => {
    setCvState((currentState) => {
      // Duplicating current global state skill array
      const newSkillArray = [...currentState.skill];
      // Find current index of array, and updating the field within
      newSkillArray[index] = {
        ...currentState.skill[index],
        [fieldName]: fieldState()[fieldName],
      };
      return { ...currentState, skill: newSkillArray };
    });
  };

  return (
    <div>
      <h1 className="input-heading">Skills</h1>
      <div>
        {/* Render education fields for each one saved in memory to allow editing */}
        {cvState.skill.map((value, index) => (
          <div key={index}>
            <div className="input-row-skill">
              <TextField
                label="Skill Set"
                text="skillSet"
                state={cvState.skill[index]}
                setState={(fieldState) => {
                  setSkillState("skillSet", index, fieldState);
                }}
              />
              <TextField
                label="Skills"
                text="skill"
                state={cvState.skill[index]}
                setState={(fieldState) => {
                  setSkillState("skill", index, fieldState);
                }}
              />
              <div className="btn-wrapper-skill">
                <button
                  className="btn-skill"
                  onClick={() => handleDeleteSkill(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Render initial education input form */}
      <div className="input-row-skill">
        <TextField
          label="Skill Set"
          text="skillSet"
          state={skill}
          setState={setSkill}
        />

        <TextField
          label="Skills"
          text="skill"
          state={skill}
          setState={setSkill}
        />

        <div className="btn-wrapper-skill">
          <button className="btn-skill" onClick={handleAddSkill}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
