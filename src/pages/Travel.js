import React from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";

export default function Travel() {
  return (
    <div className="m-5">
      <div className="text-center">
        <h1 className="project-title">TRAVEL EXPENSE TRACKER</h1>
        <h3>MySQL and Python</h3>
        <Link
          to="https://github.com/nyashanice/Travel-Expense-Tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
      </div>
      <div>
        <div className="mt-4 mb-4">
          <h4>SUMMARY</h4>
          <div>
            The data and information shown gives NBA fans the chance to decide
            on a favorite NBA team and/or player for future seasons. With a
            combination of charts, graphs, and values, there is sufficient data
            to get an overview of team performance and weak/strong points.
          </div>
        </div>
        <div className="mb-4">
          <h4>SKILLS SHOWN/DEVELOPED</h4>
          <div>
            To create this project, I showcased multiple Google Sheets skills. I
            used a <span className="highlight p-1">pivot table</span> to narrow
            down the top 10 scorers during the season which are players that
            averaged at least 25 and above per game. I used the{" "}
            <span className="highlight p-1">SUMIFS</span> function to gather the
            total turnovers, steals, blocks, and points per team. I used{" "}
            <span className="highlight p-1">column charts</span> to showcase the
            data visually. And lastly, I used{" "}
            <span className="highlight p-1">VLOOKUP</span> to allow viewers to
            compare the statistics for two different teams and see a performance
            analysis.
          </div>
        </div>
        <div>
          <h4>USAGE</h4>
          <div>
            To view the raw data as well as access the comparative performance
            analysis, use the "Dataset" link above. This link contains various
            tabs that show different charts and team or individual data. To view
            the presentation with presenter notes that describe my findings, use
            the "Presentation with presenter notes" link above.
          </div>
        </div>
      </div>
    </div>
  );
}
