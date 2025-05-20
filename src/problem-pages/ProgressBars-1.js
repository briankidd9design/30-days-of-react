/*Progress Bars
Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown.

Requirements:
Clicking on the "Add" button adds a progress bar to the page
Each progress bar starts filling up smoothly as soon as it's added
Each bar takes approximately 2000ms to completely fill up
Multiple bars should work independently of each other
Notes:
Use the useState hook to manage the list of progress bars
Consider using the useEffect hook to handle the animation timing
You can use CSS transitions for smooth animations
Think about how to track the progress of each bar separately */

import React from "react";
// import Navigation from "./Navigation";
import "../progress-bars-css/progress-bars.css";
// Import React hooks here
import { useState, useEffect } from "react";

export default function ProgressBars() {
  // Implement state to track progress bars
  const [bars, setBars] = useState([{ id: `progressBar-${0}`, progress: 50 }]);
  const [count, setCount] = useState(1);
  // const [isAnimating, setIsAnimating] = useState(false);
  // Implement function to add a new progress bar

  const addBar = () => {
    const newId = `progressBar-${count}`;
    const newBar = { id: newId, progress: 20 };
    setBars([...bars, newBar]);
    setCount(count + 1);
    console.log(newId);
  };
  const increaseProgress = (id) => {
    setBars((prev) =>
      prev.map((bar) =>
        bar.id === id
          ? { ...bar, progress: Math.min(bar.progress + 10, 100) }
          : bar
      )
    );
  };
  const decreaseProgress = (id) => {
    setBars((prev) =>
      prev.map((bar) =>
        bar.id === id
          ? { ...bar, progress: Math.min(bar.progress - 10, 100) }
          : bar
      )
    );
  };
  // Investigate ways to use a useEffect hook to trigger the animation with a transition
  // 1. Render new progress bar X
  // 2. Show a progress bar on render X
  // 3. Everytime a new progress bar is added, show the animation which adds the green bar fill X
  // 4. Make sure each address bar has a unique key and a unique id X
  // 5. IS THERE A WAY TO UTILIZE THE USEEFFECT HOOK TO ANIMATE THE PROGRESS BAR O
  // brain storming
  /* 
  1. add the percentage width dynamically using a class created in the jsx so it has access to the bars.progress
  2. Once the percentage is added, animate the progress bar to show the percentage
*/
  // useEffect(() => {
  //   if (isAnimating) {
  //     const intervalId = setInterval(() => {
  //       setBars((prevProgress) => {
  //         if (prevProgress < 100) {
  //           return prevProgress + 1;
  //         } else {
  //           clearInterval(intervalId);
  //           setIsAnimating(false);
  //           return prevProgress;
  //         }
  //       });
  //     }, 20);

  //     return () => clearInterval(intervalId);
  //   }
  // }, [isAnimating]);

  // const handleClick = () => {
  //   setIsAnimating(true);
  //   addBar();
  // };

  //   useEffect(() => {
  // addClass
  //   }, []);
  return (
    <div className="container">
      <h1>Progress Bars</h1>
      <button onClick={addBar} className="add-button">
        Add Progress Bar
      </button>

      {bars.map((bar) => (
        <>
          <button
            onClick={() => increaseProgress(bar.id)}
            className="add-button"
          >
            Add Percentage
          </button>
          <button
            onClick={() => decreaseProgress(bar.id)}
            className="add-button"
          >
            Subtract Percentage
          </button>
          <div key={bar.id} id={bar.id} className="progress-bars">
            {/* Render progress bars here */}
            {/* Example of what a progress bar might look like: */}
            <span>{`${bar.progress}%`}</span>
            <div className="progress-bar-container">
              <div
                id="progressBarFill"
                className="progress-bar-fill"
                style={{
                  width: `${bar.progress}%`,
                  // width: "0%",
                }}
              ></div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
