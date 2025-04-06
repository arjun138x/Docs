import React from "react";

const Interests = ({ data, setData, error }) => {
  const { interests } = data;

  const handleOnChange = (value) => {
    // remove values if already exist
    if (interests.includes(value)) {
      setData((prv) => ({
        ...prv,
        interests: prv.interests.filter((val) => val !== value),
      }));
    } else setData((prv) => ({ ...prv, interests: [...prv.interests, value] }));
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
          onChange={() => handleOnChange("coding")}
        />
        <label>Coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="books"
          checked={interests.includes("books")}
          onChange={() => handleOnChange("books")}
        />
        <label>Books</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="javaScript"
          checked={interests.includes("javaScript")}
          onChange={() => handleOnChange("javaScript")}
        />
        <label>JavaScript</label>
      </div>
      {error.interests && (
        <span style={{ display: "block", color: "red" }}>
          {error.interests}
        </span>
      )}
    </div>
  );
};

export default Interests;
