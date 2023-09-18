import React, {useState} from "react";

import Header from './Components/Header';
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import "./App.css";

import Alphomclav625 from './Images/Alphomclav-625.jpeg'
import AlphorabDSR from './Images/Alphorab-DSR.jpeg'
import ZensferXT from './Images/Zensfer-xt.jpeg'
import Zensovital from './Images/Zensovital.jpeg'

const social = [
  {
    "name":"facebook",
    "url":"",
    "className":"fa fa-facebook"
  },
  {
    "name":"twitter",
    "url":"",
    "className":"fa fa-twitter"
  },
  {
    "name":"linkedin",
    "url":"",
    "className":"fa fa-linkedin"
  },
  {
    "name":"instagram",
    "url":"",
    "className":"fa fa-instagram"
  }
]

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

  const [data, setData] = useState({
    "main": {
      "name":"Nordic-Giant Project",
      "description":"I am a web development engineer and I use react and vue.js to develop pages. This project is a resume template that can be used as the project home page or resume page",
      "image":"profilepic.jpg",
      "bio":"Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.",
      "contactmessage":"Here is where you should write your message to readers to have them get in contact with you.",
      "email": "youremailhere@gmail.com",
      "phone": "555-555-5555",
      "github":"https://github.com/nordicgiant2/react-nice-resume",
      "project":"https://github.com/nordicgiant2/react-nice-resume",
      "address":{
        "street":"(Your Street)",
        "city":"(Your City)",
        "state":"(Your State)",
        "zip": "(Your Zip/Postal Code)"
      },
      "website": "http://www.timbakerdev.com",
      "resumedownload":"http://timbakerdev.com",
      "social":[
        {
          "name":"facebook",
          "url":"https://github.com/nordicgiant2/react-nice-resume",
          "className":"fa fa-facebook"
        },
        {
          "name":"twitter",
          "url":"http://twitter.com",
          "className":"fa fa-twitter"
        },
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/tim-baker-8420009a/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"instagram",
          "url":"http://instagram.com/tbaker_x",
          "className":"fa fa-instagram"
        },
        {
          "name":"github",
          "url":"https://github.com/nordicgiant2/react-nice-resume",
          "className":"fa fa-github"
        }
      ]
    },
    "resume":{
      "skillmessage":"Here you can create a short write-up of your skills to show off to employers",
      "education":[
        {
          "school":"University?",
          "degree":"Masters in Beer tasting",
          "graduated":"April 2017",
          "description":"Describe your experience at school, what you learned, what useful skills you have acquired etc."
        },
        {
          "school":"School #1 Maybe College?",
          "degree":"What did you study 101",
          "graduated":"March 2013",
          "description":"Describe your experience at school, what you learned, what useful skills you have acquired etc."
        }
      ],
      "work":[
        {
          "company":"Awesome Design Studio",
          "title":"Senior UX God ",
          "years":"March 2018 - Present",
          "description":"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
        },
        {
          "company":"Super Cool Studio",
          "title":"Junior bug fixer",
          "years":"March 2017 - February 2018",
          "description":"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
        }
      ],
      "skills":[
        {
          "name":"Python",
          "level":"60%"
        },
        {
          "name":"VueJs",
          "level":"55%"
        },
        {
          "name":"ReactJs",
          "level":"50%"
        },
        {
          "name":"CSS",
          "level":"90%"
        },
        {
          "name":"PHP",
          "level":"80%"
        },
        {
          "name":"Swift",
          "level":"50%"
        },
        {
          "name":"JAVA",
          "level":"80%"
        }
      ]
    }
  }
  )
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
