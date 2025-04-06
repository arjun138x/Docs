import { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "lee",
    age: 28,
    mail: "lee@gmail.com",
    interests: ["coding", "javaScript"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name?.length < 2) err.name = "name is not valid";
        if (!data.age || data.age < 18) err.age = "age is not valid";
        if (!data.mail || data.mail?.length < 2) err.mail = "mail is not valid";
        setError(err);
        return err.name || err.age || err.age ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (!data.interests?.length) err.interests = "select one interest";
        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveComponent = tabs[activeTab].component;

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) setActiveTab((prv) => prv - 1);
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) setActiveTab((prv) => prv + 1);
  };
  const handleSubmitClick = () => {
    console.log(data);
    //  do api call
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "2px",
                margin: "2px",
                border: "1px solid black",
              }}
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      {/*  component */}
      <div
        style={{
          border: "1px solid black",
          height: "500px",
          padding: "5px",
          margin: "5px",
        }}
      >
        <ActiveComponent data={data} setData={setData} error={error} />
      </div>
      {/* buttons */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
