import React, { useState } from "react";
import InputPage from "./components/InputPage";
import OutputPage from "./components/OutputPage";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import "./components/styles/styles.css";

const App = () => {
  const [cvState, setCvState] = useState({
    name: "Jarryd Cheso",
    email: "jarryd.cheso@gmail.com",
    phone: "+61 434 836 615",
    location: "Perth, Australia",
    statement:
      "Subsea Engineer with experience working across the project lifecycle of offshore oil and gas developments. Skilled in project management and delivery. Currently enrolled to study a Master of Computing to transition to a career in software engineering.",
    education: [
      {
        uni: "Imperial College London",
        degree: "Master of Computing",
        grade: "",
        studyFrom: "Oct 2021",
        studyTo: "Jul 2022",
      },
      {
        uni: "The University of Adelaide",
        degree: "Bachelor of Engineering (Mechanical)",
        grade: "GPA: 6.4/7",
        studyFrom: "Mar 2013",
        studyTo: "Nov 2016",
      },
    ],
    experience: [
      {
        jobTitle: "Subsea Engineer",
        company: "Woodside Energy",
        workFrom: "Feb 2017",
        workTo: "July 2021",
        location: "Perth, Australia",
        summary:
          "• Onshore planning and preparation activities for subsea construction\n• Leadership and support of offshore execution activities\n• Driving health and safety performance and compliance\n• Leadership of contractors onshore and offshore to deliver design and construction services\n• Management of interfaces across company functional disciplines and contractors\n• Identify, communicate and manage risk",
      },
    ],
    skill: [
      {
        skill: " Python, JavaScript, NodeJS",
        skillSet: "Programming Languages",
      },
      {
        skill: "Pandas, TensorFlow, Numpy, React",
        skillSet: "Programming Libraries",
      },
      { skill: "HTML, CSS, Rest", skillSet: "Web Technologies" },
      { skill: "MySQL, MongoDB, Git", skillSet: "Data Management" },
    ],
  });

  return (
    <div>
      <PageHeader />
      <div className="app-container">
        <InputPage state={cvState} setState={setCvState} />
        <OutputPage state={cvState} setState={setCvState} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
