import React, { useState } from "react";
import InputPage from "./components/InputPage";
import OutputPage from "./components/OutputPage";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import "./components/styles/styles.css";

const App = () => {
  // const header = { name: "", email: "", phone: "" };
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    location:"",
    statement: "",
    uni:"",
    degree:"",
    grade:"",
    studyFrom:"",
    studyTo:""

  });

  return (
    <div>
      <PageHeader />
      <div className="section-wrapper">
        <InputPage state={state} setState={setState} />

        <OutputPage state={state} setState={setState} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
