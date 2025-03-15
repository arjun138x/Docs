import React, { useState, useEffect } from "react";

function ProgressBar({ progress }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "#4caf50",
          width: `${width}%`,
          transition: "width 0.1s ease-in-out", // Smooth transition
          transformOrigin: "left", // Ensure transformation starts from left
          textAlign: "right",
        }}
      >
        {width}%
      </div>
    </div>
  );
}

function App() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress > 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ProgressBar progress={progressValue} />
    </div>
  );
}

export default App;
