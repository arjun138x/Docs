import React, { useEffect, useState } from "react";

const images = [
  "https://wallpapers.com/images/high/angry-reddit-snoos-art-kaact1ig2g2ovegj.webp",
  "https://wallpapers.com/images/high/big-tree-with-waterfalls-minecraft-hd-519nr0sf5ib2ck96.webp",
  "https://wallpapers.com/images/high/hd-video-game-darksiders-mqurxwm6us1r0lp4.webp",
  "https://wallpapers.com/images/high/santa-claus-with-presents-gby5jt2nwnuw8wmz.webp",
  "https://wallpapers.com/images/high/hd-video-game-league-of-legends-06bw92xwt28qqbkl.webp",
];

const SliderAuto = () => {
  const [count, setCount] = useState(0);
  function nextSlide() {
    /**
     * setCount((count + 1) % images.length);
     * the above code will throw below error
     * React Hook useEffect has a missing dependency: 'nextSlide'. Either include it or remove the dependency array.eslintreact-hooks/exhaustive-deps
     * th solve above error use this code. setCount((prevCount) => (prevCount + 1) % images.length);
     */
    //
    setCount((prevCount) => (prevCount + 1) % images.length);
  }

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), 2000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="flex justify-center items-center mt-2">
      {/* THIS METHOD WILL IMPROVE THE PERFORMANCE */}
      {images.map((url, index) => (
        // key is mandatory for map items. index is not recommended as key
        <img
          src={url}
          className={
            "mx-4 w-[700px] h-[400px] object-contain " +
            (count === index ? "block" : "hidden")
          }
          alt="img"
          key={url}
        />
      ))}
    </div>
  );
};

export default SliderAuto;
