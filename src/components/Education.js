import React from "react";
import "./styles/styles.css";
import TextField from "./fields/TextField";
import LongTextField from "./fields/LongTextField";
import TelField from "./fields/TelField";

const Education = ({ state, setState }) => {
  return (
    <div>
      <h1 className="input-heading">Education</h1>
      <div className="input-row">
        <TextField
          label="Degree"
          text="degree"
          state={state}
          setState={setState}
        />
        <TextField
          label="University"
          text="uni"
          state={state}
          setState={setState}
        />
      </div>
      <div className="input-row">
        <TextField
          label="Grade"
          text="grade"
          state={state}
          setState={setState}
        />
        <TextField
          label="From"
          text="studyFrom"
          state={state}
          setState={setState}
        />
        <TextField
          label="To"
          text="studyTo"
          state={state}
          setState={setState}
        />
      </div>
    </div>
  );
};

export default Education;
