import React from "react";
import Fade from "react-reveal";

const About = () => {
  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="nine columns main-col">
            <div className="row">
              <div className="columns">
                <h2>Corporate Details</h2>
                <p className="address">
                  <b>Corporate Identification Number (CIN):</b> 
                  &nbsp;U51909BR2021PTC050740
                  <br />
                  <b> Registration Number:</b> 50740
                  <br />
                  <b>Mobile number:</b> <a href="tel:9386852977">9386852977</a> <br />
                  <b>Email Address:</b> <a href="mailto:alphoncepharma@gmail.com">alphoncepharma@gmail.com</a>
                  <br />
                  <b>Address:</b> Rail Vihar Colony, Aadarsh Nagar Phase-01
                  Devrikhurd, Bilaspur Chhattisgarh, 495004
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};
export default About;
