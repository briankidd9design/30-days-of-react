import React from "react";
import Navigation from "./Navigation";

// Import React hooks here

export default function ProgressBars() {
  // Implement state to track progress bars

  // Implement function to add a new progress bar

  return (
    <>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="container">
        <h1>Progress Bars</h1>

        <button className="add-button">Add Progress Bar</button>

        <div className="progress-bars">
          {/* Render progress bars here */}
          {/* Example of what a progress bar might look like: */}
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "0%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
