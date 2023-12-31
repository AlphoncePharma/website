import React from "react";
import Fade from "react-reveal";

const Footer = ({ social }) => {
  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">
              {social.map((network) => (
                <li key={network.name}>
                  <a href={network.url}>
                    <i className={network.className}></i>
                  </a>
                </li>
              ))}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2023 Alponce Pharma</li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
