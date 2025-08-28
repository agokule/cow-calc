"use client";

import { useState, useEffect } from "react";
import "./Tutorial.css";

export default function Tutorial() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if this is the user's first visit
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Set the flag in localStorage so the tutorial doesn't show again
    localStorage.setItem("hasVisited", "true");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="tutorial-overlay">
      <div className="tutorial-modal">
        <button className="tutorial-close" onClick={() => setIsVisible(false)}>
          ×
        </button>
        <h2>Welcome to Cow Calc!</h2>
        <p>This is a tutorial to help you get started:</p>
        <ol>
          <li>Use the sidebar to browse units</li>
          <li>Drag and drop them to the blank sections</li>
          <li>Adjust unit properties using the dropdowns</li>
          <li>Click "Connections" to set which units battle each other</li>
          <li>Finally, press "Start Battle Calculation" to see if you will win!</li>
        </ol>
        <button className="tutorial-button" onClick={handleClose}>
          Got it, don't show this again.
        </button>
      </div>
    </div>
  );
}
