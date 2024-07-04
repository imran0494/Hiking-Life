import React from "react";

const Promo = () => {
  return (
    <div className="Promo">
      <div className="left-section">
        <h2 className="main-heading">
          ROCK <br /> CLIMBING
        </h2>
        <h3 className="subheading2">1. CLASSES & EVENTS</h3>
        <p className="description2">
          Hatha is the most classic yoga. Its origin is in the Raya Yoga of
          Patanjali and other classical texts such as the Bhagavad Gita and
          Hatha Yoga Pradipika.
        </p>
        <div className="underline"></div>
        <p className="modules">10 modules</p>
        <p className="weekends">Divided into 7 weekends</p>
        <div className="info">
          <div className="info-item">
            <span>Start</span>
            <span>Price</span>
          </div>
          <div className="info-item">
            <span>April 15</span>
            <span>$900</span>
          </div>
          <div className="info-item">
            <span>20.00 hrs</span>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img
          src={`${process.env.PUBLIC_URL}/promo.png`}
          alt="Rock Climbing"
          className="promo-image"
        />
        <p className="right-description">
          WALKING IN NATURE <br /> AS A RECREATIONAL <br /> ACTIVITY
        </p>
      </div>
    </div>
  );
};

export default Promo;
