import React from "react";

const Promo3 = () => {
  return (
    <>
      <div className="promo3-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 promo3-content-container">
              <div className="promo3-heading-container">
                
                <h1 className="promo3-heading">
                  WALKING IN NATURE <br />
                  AS A RECREATIONAL <br />
                  ACTIVITY
                </h1>
              </div>
              <h3 className="promo3-subheading">
                .ACTIVITIES
              </h3>
              <p className="promo3-description">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                elit  purus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="promo3-skew-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/promo3.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
};

export default Promo3;
