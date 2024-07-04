import React from "react";

const Contact = () => {
  return (
    <div className="contact"> 
      <div className="left-section">
        <h2>ABOUT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus feugiat, molestie ipsum et, facilisis nibh. Sed auctor felis sed
          urna interdum consequat.
        </p>
        <div className="logo-section">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className="logo"
          />
          <span className="brand-text">
            Hiking <span className="text-bold">Life</span>
          </span>
        </div>
      </div>
      <div className="right-section">
        <div className="column">
          <div className="section-item">
            <h4>ABOUT</h4>
            <p>Team</p>
            <p>Join Us</p>
            <p>Ethic</p>
            <p>Goals</p>
          </div>
        </div>
        <div className="column">
          <div className="section-item">
            <h4>ABOUT</h4>
            <p>Team</p>
            <p>Join Us</p>
            <p>Ethic</p>
            <p>Goals</p>
          </div>
        </div>
        <div className="column">
          <div className="section-item">
            <h4>ABOUT</h4>
            <p>Team</p>
            <p>Join Us</p>
            <p>Ethic</p>
            <p>Goals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
