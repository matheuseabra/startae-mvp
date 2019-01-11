import React from "react";
import Nav from './Nav/Nav';
import './Hero.css';
import LogoTwitter from '../../assets/logos/logo-twitter.svg';

const Hero = (props) => {
  return (
      <section className="hero is-purple asymmetric">
        <Nav />  
        <div className="hero-body has-text-white">
          <div className="container is-fluid">
            <h1 className="hero-title">{props.title}</h1>
            <p className="hero-desc is-size-5">{props.desc}</p>
           
          </div>  
        </div>
        <div className="hero-foot">
            <div className="is-fluid">
              <h2 className="tweets-title"><img src={LogoTwitter} alt="Twitter Logo" /> Latest tweets from our team</h2>
            </div>
        </div>
      </section>
  );
};

export default Hero;
