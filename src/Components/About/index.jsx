import React from "react";
import Fade from "react-reveal";
import Logo from '../../Images/RajLogo.jpeg'

const name = 'Alphonce Pharma';
const profilepic = Logo;
const bio = "Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.";
const street = "Rail Vihar Colony, Aadarsh Nagar Phase-01";
const city = "Devrikhurd, Bilaspur"
const state = "Chhattisgarh"
const zip = "495004"
const phone = "9386852977"
const email = "alphoncepharma@gmail.com" 

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
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>
                  <a href={`tel:${phone}`}>{phone}</a>
                  </span>
                  <br />
                  <span>
                  <a href={`mailto:${email}`}>{email}</a></span>
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
