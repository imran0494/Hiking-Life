import React from "react";
import Class from "./Class";
import Promo from "./Promo";
import OnlineClass from "./OnlineClass";
import Promo2 from "./Promo2";
import Promo3 from "./Promo3";
import Contact from "./Contact";


const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 content-container">
              <div className="heading-container">
                <div className="cross-container">
                  <span className="green-cross">✚</span>
                  <span className="green-cross">✚</span>
                </div>
                <h1 className="heading">
                  Discover your <br /> next Hike
                </h1>
              </div>
              <p className="subheading">
                DISCOVER YOUR <br /> NEXT HIKE
              </p>
              <p className="description">
                Lorem ipsum dolor sit amet, <br /> consectetur <br /> adipiscing
                elit nulla nec purus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="skew-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/image.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Class/>
      <Promo/>
      <OnlineClass/>
      <Promo2/>
      <Promo3/>
      <Contact/>
    </>
  );
};

export default HomePage;

