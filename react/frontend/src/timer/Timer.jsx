import React, { useState } from "react";
import { useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  //   all vales need to clear
  const restartTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="text-center">
      <div className="">{time}</div>
      <div className="">
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button className="mx-2" onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={restartTimer}>Restart</button>
      </div>
    </div>
  );
};

export default Timer;
