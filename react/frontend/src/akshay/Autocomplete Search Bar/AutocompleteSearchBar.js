import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const AutocompleteSearchBar = () => {
  const [data, setData] = useState([]); // Stores fetched search results
  const [input, setInput] = useState(""); // Tracks user input
  const [cache, setCache] = useState({}); // Caches fetched results for performance optimization
  const [showResult, setShowResult] = useState(false); // Controls dropdown visibility
  const [selectedIndex, setSelectedIndex] = useState(-1); // Tracks the currently highlighted result

  const inputRef = useRef(null);

  // Handles keyboard navigation (Arrow Up, Arrow Down, Enter)
  const handleKeyDown = (e) => {
    if (!data.length) return; // If no results, exit early

    const key = e.key;
    console.log("Selected Index:", selectedIndex);

    if (key === "ArrowDown") {
      // Move selection down
      setSelectedIndex((prev) => (prev + 1) % data.length);
    } else if (key === "ArrowUp") {
      // Move selection up
      setSelectedIndex((prev) => (prev - 1 + data.length) % data.length);
    } else if (key === "Enter" && selectedIndex !== -1) {
      // Set input value when Enter is pressed
      setInput(data[selectedIndex].name);
      setShowResult(false); // Hide search box
    }
  };

  // Fetches data from API or cache
  const fetchData = async () => {
    if (cache[input]) {
      console.log("Fetching data from cache...");
      setData(cache[input]);
      return;
    }

    try {
      const res = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input
      );
      const json = await res.json();
      setCache((prevCache) => ({ ...prevCache, [input]: json.recipes }));
      setData(json.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Debounced effect to prevent excessive API calls
  useEffect(() => {
    inputRef.current.focus(); // auto focus to input box
    const timeout = setTimeout(() => fetchData(), 400);
    return () => clearTimeout(timeout); // Cleanup on unmount or re-render
  }, [input]);

  return (
    <div className="container">
      <input
        className="input-box"
        type="search"
        value={input}
        onChange={({ target }) => setInput(target.value)}
        onFocus={() => setShowResult(true)}
        onBlur={() => setTimeout(() => setShowResult(false), 200)} // Delayed hide to allow clicking on results
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {showResult && data.length > 0 && (
        <div className="search-box">
          {data.map((r, index) => (
            <p
              key={r.id}
              className={`search-text ${
                index === selectedIndex ? "selected" : ""
              }`}
              onMouseEnter={() => setSelectedIndex(index)} // Allow hover selection
              onClick={() => {
                setInput(r.name); // Set input to clicked item
              }}
            >
              {r.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteSearchBar;
