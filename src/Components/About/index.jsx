import React from "react";
import Fade from "react-reveal";
import Logo from "../../Images/RajLogo.jpeg";

// const name = "Alphonce Pharma";
const profilepic = Logo;
const bio =
  "Alphonce Pharmaceuticals Private Limited is a privately held company established on February 24, 2021. We are classified as a non-government company and are registered at the Registrar of Companies in Patna. Our commitment to excellence in the pharmaceutical industry drives our mission to improve healthcare worldwide.";
// const street = "Rail Vihar Colony, Aadarsh Nagar Phase-01";
// const city = "Devrikhurd, Bilaspur";
// const state = "Chhattisgarh";
// const zip = "495004";
// const phone = "9386852977";
// const email = "alphoncepharma@gmail.com";

const About = () => {
  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Us</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns">
                <h2>Leadership</h2>
                <p className="address">
                  The leadership of Alphonce Pharmaceuticals Private Limited
                  consists of&nbsp;
                  <b>Pinkee Kumari</b> and <b>Mohd Yousuf Monawwar</b>
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
