import React from "react";

const OnlineClass = () => {
  return (
    <div className="online-class">
      
      <div className="image-section">
        <img
          src={`${process.env.PUBLIC_URL}/online.webp`}
          alt="Big Bend Natural Park"
          className="full-width-image"
        />
        <div className="image-text">
          <h1>BIG BEND NATURAL PARK</h1>
          <h1>HIKING GUIDE</h1>
          <h2>THIS HIKE IS THE NEXT BEST OPTION</h2>
          <h2>Lorem</h2>
          <button className="see-more-button">see more</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineClass;
