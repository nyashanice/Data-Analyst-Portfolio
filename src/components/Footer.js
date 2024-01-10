import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="text-center p-3">
      <div className="text-center">Contact me!</div>
      <div className="">
        <Link to="mailto:nyastyus@gmail.com">
          <img
            src="../Data-Analyst-Portfolio/images/email.png"
            alt=""
            className="footer-logo m-2"
          />
        </Link>
        <Link
          to="https://www.linkedin.com/in/nyatyus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../Data-Analyst-Portfolio/images/linkedin.png"
            alt="LinkedIn logo"
            className="footer-logo m-2"
          />
        </Link>
        <Link
          to="https://github.com/nyashanice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../Data-Analyst-Portfolio/images/github.png"
            alt="GitHub logo"
            className="footer-logo m-2"
          />
        </Link>
      </div>
    </footer>
  );
}
