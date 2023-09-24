import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

import "./index.css";

const Header = () => {
  return (
    <header id="home">
      <ParticlesBg type="cobweb" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#products">
              Medicines
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">name</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h2>Welcome to <br/>
            <span style={{color: '#1abc9c'}}> ALPHONCE PHARMACEUTICALS PRIVATE LIMITED</span></h2>
            <h3>
              At Alphonce pharmaceuticals, we are dedicated to advancing healthcare
              through innovative pharmaceutical solutions. With a focus on
              research, development, and manufacturing, we strive to improve the
              quality of life for patients around the world. Explore our website
              to learn more about our mission, products, and commitment to
              excellence.
            </h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href="#products" className="button btn project-btn">
                <i className="fa fa-plus-square"></i>Medicine
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
