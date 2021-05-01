import React from "react";
import TextField from "./fields/TextField";

const InputPage = ({ state, setState }) => {
  return (
    <div>
      <TextField text="name" state={state} setState={setState} />
      <TextField text="email" state={state} setState={setState} />
      <TextField text="phone" state={state} setState={setState} />
    </div>
  );
};

export default InputPage;
