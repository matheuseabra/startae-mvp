import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hero title="Meet our team!!" desc="We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use."/>
      </div>
    );
  }
}

export default App;
