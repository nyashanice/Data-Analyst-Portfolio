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
            The Travel Expense Tracker is a Python-based application designed to
            help users manage and keep track of their travel expenses. Whether
            you're a frequent traveler, a business professional, or an
            adventurer exploring new places, this tool provides a convenient way
            to organize your travel-related spending.
          </div>
        </div>
        <div className="mb-4">
          <h4>SKILLS SHOWN/DEVELOPED</h4>
          <div>
            In developing the Travel Expense Tracker, I honed and showcased a
            diverse set of skills, solidifying my capabilities as a versatile
            analyst/developer. Here are some key skills exemplified by this project:
            <ol>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">Database Management:</span>{" "}
                Implemented a robust MySQL database schema to efficiently store
                and manage travel and expense data, demonstrating a deep
                understanding of database design principles.
              </li>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">
                  Backend Development with Python:
                </span>{" "}
                Engineered the backend of the application using Python, creating
                robust functionalities to handle data storage, retrieval, and
                manipulation.
              </li>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">
                  Command-Line Interface (CLI) Development:
                </span>{" "}
                Built a user-friendly CLI using Inquirer, demonstrating the
                ability to create effective command-line interfaces for
                streamlined user interactions.
              </li>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">
                  Data Analysis and Visualization:
                </span>{" "}
                Utilized data analysis skills to extract meaningful insights
                from the dataset, ensuring that the application not only tracks
                expenses but also provides valuable information to users.
              </li>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">
                  Portfolio-Driven Development:
                </span>{" "}
                Aligned the project with personal and professional goals,
                incorporating features that contribute to a compelling portfolio
                for potential clients and employers.
              </li>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">Problem Solving:</span>{" "}
                Addressed challenges in real-time, employing creative
                problem-solving techniques to overcome obstacles encountered
                during the development process.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h4>USAGE</h4>
          <div>
            To view my code, use the "Github" link above. To view the demo
            video, click{" "}
            <a
              href="https://drive.google.com/file/d/1Vk6SnVx4yv__LcuySUTdFmSDWqbnH6_X/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
