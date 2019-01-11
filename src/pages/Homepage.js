import React from 'react';
import Hero from '../components/Hero/Hero';
import TeamGrid from '../components/TeamGrid/TeamGrid';
import '../App.css';

const Homepage = () => (
  <div id="homepage">
      <Hero title="Meet our team" desc="We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use."/>
      <TeamGrid />  
  </div>
)

export default Homepage;