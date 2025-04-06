import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleOnChange = (value) => {
    setData((prv) => ({ ...prv, theme: value }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={({ target }) => handleOnChange(target.name)}
        />
        <label>dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={({ target }) => handleOnChange(target.name)}
        />
        <label>light</label>
      </div>
    </div>
  );
};

export default Settings;
