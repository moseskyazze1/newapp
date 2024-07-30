import { Button } from "bootstrap";
import "./styles/about.css";
import { useState } from "react";

function About() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  function viewInfo() {
    setIsInfoVisible(true);
  }
  function getInfo() {
    if (isInfoVisible) {
      return (
        <div className="info">
          <p>Moss123@yahoo.com</p>
          <p>4253457925</p>
        </div>
      );
    } else {
      return <p>Click the button to view my info</p>;
    }
  }
  return (
    <div className="About">
      <h2>Moses Kyazze</h2>
      {getInfo()}

      
      
      
        <button onClick={viewInfo} className="btn btn-sm btn-outline-dark">
          View More Info
        </button>
      
    </div>
  );
}

export default About;

//this is the about page ///////
/////