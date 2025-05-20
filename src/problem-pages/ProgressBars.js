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

//
// Investigate ways to use a useEffect hook to trigger the animation with a transition
// 1. Render new progress bar X
// 2. Show a progress bar on render X
// 3. Everytime a new progress bar is added, show the animation which adds the green bar fill X
// 4. Make sure each address bar has a unique key and a unique id X
// 5. IS THERE A WAY TO UTILIZE THE USEEFFECT HOOK TO ANIMATE THE PROGRESS BAR X
// brain storming

import React from "react";
// import Navigation from "./Navigation";
import "../progress-bars-css/progress-bars.css";
// Import React hooks here
import { useState, useEffect } from "react";

export default function ProgressBars() {
  // Implement state to track progress bars
  // const [bars, setBars] = useState(0);
  // const [progress, setProgress] = useState(30);

  const [bars, setBars] = useState([{ id: `progressBar-${0}`, progress: 50 }]);
  const [count, setCount] = useState(1);

  const addBar = () => {
    const newId = `progressBar-${count}`;
    const newBar = { id: newId, progress: 50 };
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
  return (
    <div className="container">
      <h1>Progress Bars</h1>

      {bars.map((bar) => (
        <>
          <ProgressBar
            key={bar.id}
            id={bar.id}
            progress={bar.progress}
            bars={bars}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
            addBar={addBar}
          />
        </>
      ))}
    </div>
  );
}
// Individual progress bar
function ProgressBar({
  id,
  progress,
  increaseProgress,
  decreaseProgress,
  addBar,
}) {
  const [startTransition, setStartTransition] = useState(false);
  const [delayedProgress, setDelayedProgress] = useState(null);

  // Start transition after first render and never
  // apply this effect ever again.

  useEffect(() => {
    if (startTransition) {
      return;
    }
    setStartTransition(true);
  }, [startTransition]);
  // component did mount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedProgress(progress);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [progress]);

  return (
    <div className="bar">
      <div className="progress-bars">
        <button onClick={addBar} className="add-button">
          Add Progress Bar
        </button>
        <div className="progress-button-control">
          <button id={id} onClick={() => increaseProgress(id)}>
            Increase Progress
          </button>
          <button onClick={() => decreaseProgress(id)}>
            Decrease Progress
          </button>
          <span>
            <h3>{progress}%</h3>
          </span>
          <div className="progress-bar-container">
            <div
              id={id}
              style={{ width: `${delayedProgress}%` }}
              className={[
                // 'bar-contents',
                startTransition && "progress-bar-fill",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
