import React from "react";

import Header from './Components/Header';
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
     <Header/>
     <Products/>
     <Footer/>
    </div>
  );
}

export default App;
