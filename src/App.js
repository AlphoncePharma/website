import React from "react";

import Header from './Components/Header';
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import "./App.css";

import Alphomclav625 from './Images/Alphomclav-625.jpeg'
import AlphorabDSR from './Images/Alphorab-DSR.jpeg'
import ZensferXT from './Images/Zensfer-xt.jpeg'
import Zensovital from './Images/Zensovital.jpeg'

// const social = [
//   {
//     "name":"facebook",
//     "url":"",
//     "className":"fa fa-facebook"
//   },
//   {
//     "name":"twitter",
//     "url":"",
//     "className":"fa fa-twitter"
//   },
//   {
//     "name":"linkedin",
//     "url":"",
//     "className":"fa fa-linkedin"
//   },
//   {
//     "name":"instagram",
//     "url":"",
//     "className":"fa fa-instagram"
//   }
// ]

const products = [
  {
    "title": "Alphomclav-625",
    "category": "My Travel Blog for my post-university travels",
    "image": Alphomclav625
  },
  {
    "title":"Alphorab DSR",
    "category":"(offline now) A fighting gear company I started",
    "image": AlphorabDSR
  },
  {
    "title":"Zensfer XT",
    "category":"Website I built for a restaurant I like in Thailand",
    "image":ZensferXT
  },
  {
    "title":"Zensovital",
    "category":"A React based resume website template",
    "image":Zensovital
  }
]

function App() {
  return (
    <div className="App">
     <Header/>
     <Products products={products}/>
     {/* When ever social pages are created fill the above array and pass here */}
     <Footer social={[]}/>
    </div>
  );
}

export default App;
