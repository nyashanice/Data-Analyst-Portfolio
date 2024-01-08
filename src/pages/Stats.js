import React from "react";

export default function Stats() {
  return (
    <div>
      <h1>NBA Eastern Conference 2022-23 Statistics</h1>
      <h4>Google Sheets and Google Slides</h4>
      <div>Dataset</div>
      <div>Presentation with presenter notes</div>
      <h4>Summary</h4>
      <div>
        The data and information shown gives NBA fans the chance to decide on a
        favorite NBA team and/or player for future seasons. With a combination
        of charts, graphs, and values, there is sufficient data to get an
        overview of team performance and weak/strong points.
      </div>
      <h4>Skills Shown/Developed</h4>
      <div>
        To create this project, I showcased multiple Google Sheets skills. I
        used a pivot table to narrow down the top 10 scorers during the season
        which are players that averaged at least 25 and above per game. I used
        the SUMIFS function to gather the total turnovers, steals, blocks, and
        points per team. I used column charts to showcase the data visually. And
        lastly, I used VLOOKUP to allow viewers to compare the statistics for
        two different teams and see a performance analysis.
      </div>
      <h4>Usage</h4>
      <div>
        To view the raw data as well as access the comparative performance
        analysis, use the "Dataset" link above. This link contains various tabs
        that show different charts and team or individual data. To view the
        presentation with presenter notes that describe my findings, use the
        "Presentation with presenter notes" link above.
      </div>
    </div>
  );
}
