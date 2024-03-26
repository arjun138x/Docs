import React, { useState } from "react";

const images = [
  "https://wallpapers.com/images/high/angry-reddit-snoos-art-kaact1ig2g2ovegj.webp",
  "https://wallpapers.com/images/high/big-tree-with-waterfalls-minecraft-hd-519nr0sf5ib2ck96.webp",
  "https://wallpapers.com/images/high/hd-video-game-darksiders-mqurxwm6us1r0lp4.webp",
  "https://wallpapers.com/images/high/santa-claus-with-presents-gby5jt2nwnuw8wmz.webp",
  "https://wallpapers.com/images/high/hd-video-game-league-of-legends-06bw92xwt28qqbkl.webp",
];

const Slider = () => {
  const [count, setCount] = useState(0);
  function nextOnClick() {
    count >= images.length - 1 ? setCount(0) : setCount(count + 1);
  }
  function previousOnClick() {
    count <= 0 ? setCount(images.length - 1) : setCount(count - 1);
  }
  return (
    <div className="flex justify-center items-center mt-2">
      <button
        className="bg-blue-500 h-10 px-4 py-2 rounded-lg text-white font-bold hover:bg-blue-700"
        onClick={() => previousOnClick()}
      >
        Previous
      </button>
      {/* each onclick image will fetch. performance issues will come. to resole this go with CSS hide and show */}
      {/* <img
        src={images[count]}
        className="mx-4 w-[700px] h-[400px] object-contain"
        alt="img"
      /> */}

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
      <button
        className="bg-blue-500 h-10 px-4 py-2 rounded-lg text-white font-bold hover:bg-blue-700"
        onClick={() => nextOnClick()}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
