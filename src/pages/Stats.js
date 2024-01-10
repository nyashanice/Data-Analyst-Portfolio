import React from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";

export default function Stats() {
  return (
    <div className="m-5">
      <div className="text-center">
        <h1 className="project-title">
          NBA EASTERN CONFERENCE 2022-23 STATISTICS
        </h1>
        <h3>Google Sheets and Google Slides</h3>
        <div className="d-flex flex-wrap justify-content-evenly">
          <Link
            to="https://docs.google.com/spreadsheets/d/1Bf9WismWO_dk9GBFpSRurBo7HUenueNEMU6eMrl7DJg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dataset
          </Link>
          <Link
            to="https://docs.google.com/presentation/d/1WA2bF5dZCY13Ba4N3SXW2ioNCzjJUtD3P3R3ptOz3I4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Presentation with presenter notes
          </Link>
        </div>
      </div>
      <div>
        <div className="mt-4 mb-4">
          <h4>SUMMARY</h4>
          <div>
            Explore the dynamic world of the NBA Eastern Conference with our
            comprehensive analysis of the 2022-23 season. Delve into a treasure
            trove of data, presented through captivating charts, insightful
            graphs, and key performance indicators. Whether you're a seasoned
            NBA enthusiast or a new fan, this project offers a compelling
            narrative to help you discover your favorite teams and players for
            upcoming seasons. Uncover the strengths and weaknesses of each team,
            empowering you to make informed choices as you embark on an exciting
            journey through the realm of professional basketball.
          </div>
        </div>
        <div className="mb-4">
          <h4>SKILLS SHOWN/DEVELOPED</h4>
          <div>
            The NBA Eastern Conference Stats Analysis project stands as a
            testament to my analytical and development skills, particularly in
            leveraging advanced Excel functionalities. Here's how this project
            showcased a range of skills:
            <ol>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">
                  Analysis and Visualization:
                </span>{" "}
                Applied advanced Google Sheets functions, including VLOOKUP,
                SUMIFS, and Pivot Tables, to derive insightful patterns and
                trends from the dataset. Crafted interactive column charts to
                visually represent player and team performance metrics, making
                complex data easily comprehensible.
              </li>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">Dashboard Creation:</span>{" "}
                Designed intuitive and interactive dashboard to present key
                findings, catering to both sports enthusiasts and data
                aficionados. The dashboard showcased a seamless integration of
                statistical insights with user-friendly visualizations.
              </li>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">
                  Google Sheets Proficiency:
                </span>{" "}
                Leveraged advanced Google Sheets functionalities such as VLOOKUP
                for data lookup, SUMIFS for conditional summing, and Pivot
                Tables for comprehensive data summarization, highlighting a
                nuanced understanding of spreadsheet analysis.
              </li>
              <li className="mb-3 mt-3">
                <span className="highlight p-1">Communication Skills:</span>{" "}
                Crafted comprehensive reports and presentations to effectively
                communicate complex statistical analyses, ensuring that
                technical information was accessible to a diverse audience.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h4>USAGE</h4>
          <div>
            To explore the unprocessed data and delve into a comprehensive
            performance analysis, simply navigate to the "Dataset" link above.
            Within this link, you'll find multiple tabs showcasing diverse
            charts and team or individual data. For a detailed walkthrough of my
            discoveries, including presenter notes, access the "Presentation
            with Presenter Notes" link provided.
          </div>
        </div>
      </div>
    </div>
  );
}
