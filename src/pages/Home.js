import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-bg d-flex align-items-center justify-content-center">
      <div className="home-row">
        <div className="img-div">
          <img
            className="home-img mx-auto d-block"
            src="../Data-Analyst-Portfolio/images/headshot2.jpeg"
            alt=""
          />
        </div>
        <div className="text-center align-self-center mr-5">
          <div className="home-name">NYA TYUS</div>
          <span className="home-title m-2 p-2">
            {" "}
            Data Analyst, Web Developer{" "}
          </span>
          <div className="home-txt m-2">Bachelor of Science in Biology</div>
          <div className="home-txt">
            Full Stack Web Development Bootcamp Graduate
          </div>
        </div>
      </div>
    </div>
  );
}
