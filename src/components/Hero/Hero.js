import React from "react";
import Nav from './Nav';
import './Hero.css';

const Hero = (props) => {
  return (
      <section className="hero purple-bg is-fullheight">
        <Nav />  
        <div className="hero-body has-text-white">
          <div className="container">
            <h1 className="hero-title is-size-1">{props.title}</h1>
            <p className="hero-desc is-size-4">{props.desc}</p>
          </div>
        </div>
      </section>
  );
};

export default Hero;
