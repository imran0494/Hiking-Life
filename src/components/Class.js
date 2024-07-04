import React from "react";

const Class = () => {
  return (
    <div className="ClassPage">
      <div className="cross">
        <span className="green2">✖ </span>
        <span>HIKING AND CAMPING</span>
        <br />
        <span className="green2">✖ </span>
        <span className="span2 underline1">CLASSES</span>
      </div>

      <div className="activities-container">
        <div className="activity">
          <img src={`${process.env.PUBLIC_URL}/hiking.png`} alt="Hiking" />
          <h3>Hiking</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="activity">
          <img
            src={`${process.env.PUBLIC_URL}/mountains.png`}
            alt="Mountains"
          />
          <h3>Mountains</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="activity">
          <img src={`${process.env.PUBLIC_URL}/activity.png`} alt="Camping" />
          <h3>Camping</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Class;
