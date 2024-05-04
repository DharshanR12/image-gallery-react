
import React from 'react';
import one from "./images/dog 1.jpeg"
import two from "./images/dog 2.jpeg"
import three from "./images/dog 3.jpeg"
import four from "./images/dog 4.jpeg"
import five from "./images/dog 5.jpeg"
import six from "./images/dog 6.jpeg"
import seven from "./images/dog 7.jpeg"
import eight from "./images/dog 8.jpeg"


function App() {
  
   return(
    <div style={{display:'flex',flexWrap:'wrap',padding:"30px",backgroundColor:"lightgrey",gap:"30px",justifyContent:"space-evenly"}}>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={one} style={{width:"100%",height:"75%"}} ></img>
    <h2>julie's Rabbit ears</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={two} style={{width:"100%",height:"75%"}} ></img>
    <h2>The innocent Look</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={three} style={{width:"100%",height:"75%"}} ></img>
    <h2>Big Eyed Buddy</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={four} style={{width:"100%",height:"75%"}} ></img>
    <h2>The saint Doggo</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={five} style={{width:"100%",height:"75%"}} ></img>
    <h2>Big Eyed Buggy</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={six} style={{width:"100%",height:"75%"}} ></img>
    <h2>The innocent Look</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={seven} style={{width:"100%",height:"75%"}}></img>
    <h2>The saint Doggo</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={eight} style={{width:"100%",height:"75%"}} ></img>
    <h2>Julies Rabbit Ears</h2>
  </div>
    
  </div>

   )
  }
export default App