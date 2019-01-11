import React from "react";
import Symbol from '../../../assets/logos/logo-symbol.svg';
import LogoType from '../../../assets/logos/logo-type.svg';
import './Nav.css';

const Nav = () => {
  return (
      <div className="hero-head">
          <nav className="navbar">
              <div className="container">
                  <div className="navbar-brand">               
                        <span className="logo">
                            <img src={Symbol} alt="Startaê Logo Symbol" />
                            <img src={LogoType} alt="Startaê LogoType" />
                        </span>                      
                        <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                  </div>
          </nav>
      </div>
  );
};

export default Nav;