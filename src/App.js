import React, { useState } from "react";
import InputPage from "./components/InputPage";
import OutputPage from "./components/OutputPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./components/styles/styles.css";

const App = () => {
  // const header = { name: "", email: "", phone: "" };
  const [state, setState] = useState({ name: "", email: "", phone: "" });

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="section-wrapper">
        <section>
          <InputPage state={state} setState={setState} />
        </section>
        <section>
          <OutputPage state={state} setState={setState} />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
