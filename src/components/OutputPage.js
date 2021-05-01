import React from "react";
import TextField from "./fields/TextField";

const OutputPage = ({ state, setState }) => {
  //   const { name, email, phone } = state;

  return (
    <div>
      <li>{state.name}</li>
      <li>{state.email}</li>
      <li>{state.phone}</li>
    </div>
  );
};

export default OutputPage;
