import React from "react";
import gitLogo from './assets/GitHub-Mark-32px.png'
import "./styles/styles.css";

const Footer = () => {
  return (
      <footer>
      <a href="https://github.com/Cheso7">Created by Cheso7 </a>
      <a href="https://github.com/Cheso7">
        <img src={gitLogo} alt="GitHub Logo" />
      </a>

      </footer>

  );
};

export default Footer;
