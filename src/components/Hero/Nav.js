import React from "react";
import Logo from '../../assets/logos/logo-type.svg';

const Nav = () => {
  return (
      <div className="hero-head">
          <nav className="navbar">
              <div className="container">
                  <div className="navbar-brand">               
                        <img src={Logo} alt="Startaê Logo" />                      
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