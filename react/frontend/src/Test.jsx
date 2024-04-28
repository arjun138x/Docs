import React, { useEffect, useState } from "react";

const Test = () => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setLoading((prv) => {
    //     if (prv >= 100) {
    //       clearInterval(interval);
    //       return 100;
    //     } else return prv + 1;
    //   });
    // }, 100);

    const interval2 = setInterval(() => {
      setLoading((prv) => prv + 1);
      if (loading >= 100) {
        clearInterval(interval2);
        return 100;
      }
    }, 100);
  }, []);
  return (
    <div className="bg-red-100 h-20">
      <div className={`w-[${loading}%] bg-green-400 h-20`}></div>
    </div>
  );
};

export default Test;
