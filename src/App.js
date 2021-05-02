import React, { useState } from "react";
import InputPage from "./components/InputPage";
import OutputPage from "./components/OutputPage";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import "./components/styles/styles.css";

const App = () => {
  const [cvState, setCvState] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    statement: "",
    education: [],
    experience: [],
  });

  return (
    <div>
      <PageHeader />
      <div className="section-wrapper">
        <InputPage state={cvState} setState={setCvState} />
        <OutputPage state={cvState} setState={setCvState} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
