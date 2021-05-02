import React from "react";
import "./styles/styles.css";
import TextField from "./fields/TextField";
import LongTextField from "./fields/LongTextField";
import TelField from "./fields/TelField";

const CVHeader = ({ state: cvState, setState: setCvState }) => {
  return (
    <div className="input-header">
      <h1 className="input-heading">Header</h1>
      <div className="input-row">
        <TextField
          label="Full Name"
          text="name"
          state={cvState}
          setState={setCvState}
        />
        <TextField
          label="Location"
          text="location"
          state={cvState}
          setState={setCvState}
        />
      </div>
      <div className="input-row">
        <TelField
          label="Phone Number"
          text="phone"
          state={cvState}
          setState={setCvState}
        />
        <TextField
          label="Email Address"
          text="email"
          state={cvState}
          setState={setCvState}
        />
      </div>
      <div className="input-row">
        <LongTextField
          label="Personal Statement"
          text="statement"
          state={cvState}
          setState={setCvState}
        />
      </div>
    </div>
  );
};

export default CVHeader;
