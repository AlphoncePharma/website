import React from "react";
// import Zmage from "react-zmage";
import Fade from "react-reveal";

// import "./index.css";


// const projects = [].map(function (projects) {
//     let projectImage = "images/portfolio/" + projects.image;

//     return (
//       <div key={id++} className="columns portfolio-item">
//         <div className="item-wrap">
//           <Zmage alt={projects.title} src={projectImage} />
//           <div style={{ textAlign: "center" }}>{projects.title}</div>
//         </div>
//       </div>
//     );
//   });

const Products = () => {
  return (
    <section id="products">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {/* {projects} */}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Products;
