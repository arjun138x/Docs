import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prv) => {
        console.log(prv);
        if (prv >= 100) clearInterval(interval);
        else return (prv += 10);
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        height: "40px",
        width: `${percentage}%`,
        backgroundColor: "green",
      }}
    ></div>
  );
};

export default ProgressBar;
