import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-bg home-cols">
      <div className="home-left">
        <div>image here</div>
      </div>
      <div className="home-right">
        <div>info here</div>
      </div>
    </div>
  );
}
