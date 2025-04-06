import React from "react";

const Profile = ({ data, setData, error }) => {
  const { name, age, mail } = data;
  const updateOnchange = (value, key) => {
    setData((prv) => ({ ...prv, [key]: value }));
  };
  return (
    <div>
      <div>
        <label>name:</label>
        <input
          type="text"
          value={name}
          onChange={({ target }) => {
            updateOnchange(target.value, "name");
          }}
        />
        {error.name && (
          <span style={{ display: "block", color: "red" }}>{error.name}</span>
        )}
      </div>
      <div>
        <label>age:</label>
        <input
          type="number"
          value={age}
          onChange={({ target }) => {
            updateOnchange(target.value, "age");
          }}
        />
        {error.age && (
          <span style={{ display: "block", color: "red" }}>{error.age}</span>
        )}
      </div>
      <div>
        <label>mail:</label>
        <input
          type="text"
          value={mail}
          onChange={({ target }) => {
            updateOnchange(target.value, "mail");
          }}
        />
        {error.mail && (
          <span style={{ display: "block", color: "red" }}>{error.mail}</span>
        )}
      </div>
    </div>
  );
};

export default Profile;
