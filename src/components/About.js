import React from "react";
import { image } from "../data/data";

function About() {
  return <div>
    <h2> About Me</h2>
    <p>I am currently learning to use React through playing with this website project</p>
      <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
