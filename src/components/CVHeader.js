import React from "react";
import "./styles/styles.css";
import TextField from "./fields/TextField";
import LongTextField from "./fields/LongTextField";
import TelField from "./fields/TelField";

const CVHeader = ({ state, setState }) => {
  return (
    <div className="input-header">
      <h1 className="input-heading">Header</h1>
      <div className="input-row">
        <TextField
          label="Full Name"
          text="name"
          state={state}
          setState={setState}
        />
        <TextField
          label="Location"
          text="location"
          state={state}
          setState={setState}
        />
      </div>
      <div className="input-row">
        <TelField
          label="Phone Number"
          text="phone"
          state={state}
          setState={setState}
        />
        <TextField
          label="Email Address"
          text="email"
          state={state}
          setState={setState}
        />
      </div>
      <div className="input-row">
        <LongTextField
          label="Personal Statement"
          text="statement"
          state={state}
          setState={setState}
        />
      </div>
    </div>
  );
};

export default CVHeader;
