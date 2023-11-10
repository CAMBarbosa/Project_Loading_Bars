import React from "react";
import SimpleProgressBar from "../components/progressBars/simpleProgressBar";
const SimpleProgressBarPage = () => {
  return (
    <div>
      <div className="header">
        <h1>Simple progress bar example</h1>
        <br />
        <br />
        <p>Here is a simple example of a progress bar.</p>
        <p>
          You can choose to increment the progress bar manually using the "Speed
          Up" button,
        </p>
        <p>
          or to see a time dependant progress bar, using the "Let Time Fly"
          button.
        </p>
      </div>
      <div className="content">
        <SimpleProgressBar />
      </div>
    </div>
  );
};

export default SimpleProgressBarPage;
