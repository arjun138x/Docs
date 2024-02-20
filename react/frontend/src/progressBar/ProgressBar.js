import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prv) => {
        if (prv >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prv + 1;
      });
    }, 100);
  }, []);

  return (
    <div style={{ with: "100%", height: "40px", backgroundColor: "red" }}>
      <h1
        style={{
          textAlign: "center",
          width: `${progress}%`,
          height: "40px",
          background: "green",
          margin: 0,
          lineHeight: "40px",
        }}
      >
        {progress}%
      </h1>
    </div>
  );
}

export default ProgressBar;
