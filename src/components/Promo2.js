import React from "react";


const Promo2 = () => {
  return (
    <div className="promo2">
      <div className="left-section2">
        <h2 className="main-heading2">
          HOW TO RECOVER FROM <br /> A HIKE
        </h2>
        <div className="image-list2">
          <div className="image-item2">
            <img src={`${process.env.PUBLIC_URL}/mountains.png`} alt="Step 1" />
            <p>
              - Lorem ipsum do <br />
              - lor sit amet, consectetur <br />- adipiscing elit.
            </p>
          </div>
          <div className="image-item2">
            <img src={`${process.env.PUBLIC_URL}/hiking.png`} alt="Step 2" />
            <p>
              - Lorem ipsum do <br />
              - lor sit amet, consectetur <br /> - adipiscing elit.
            </p>
          </div>
          <div className="image-item2">
            <img src={`${process.env.PUBLIC_URL}/activity.png`} alt="Step 3" />
            <p>
              - Lorem ipsum do <br />
              - lor sit amet, consectetur <br /> - adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="right-section2">
        <img
          src={`${process.env.PUBLIC_URL}/promo2.png`}
          alt="Gear"
          className="promo-image2"
        />
        <p className="right-description2">
          MAKE SURE YOUR <br /> GEAR FITS
        </p>
      </div>
    </div>
  );
};

export default Promo2;
