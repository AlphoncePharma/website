import React from "react";
import Fade from "react-reveal";

import './index.css'

const Products = ({ products }) => {
  return (
    <section id="products">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <div className="section-heading">
            <h1 className="text-center">Our Medicines</h1>
            </div>
            <div
              id="portfolio-wrapper"
              className="bgrid-halves s-bgrid-thirds cf"
            >
              {products.map(function (projects) {
                return (
                  <div key={projects.title} className="columns portfolio-item">
                    <div className="item-wrap">
                      <img src={projects.image} alt={projects.title}/>
                      <div style={{ textAlign: "center" }}>
                        {projects.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Products;
