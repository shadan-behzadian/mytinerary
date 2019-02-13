import React, { Component } from "react";

import logo from "../img/logo.png";

import { NavLink } from "react-router-dom";

import Arrow from "../components/Arrow";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="HomeImagesCenter">
          <img className="logo" src={logo} alt="MytineraryLogo" />
        </div>
        <div>
          <h3 className="homePagetxt">
            Find you perfect trip, designed by insiders who know and love their
            cities
          </h3>

          <h3 className="homePagetxt">Start by Browsing</h3>
          <NavLink to="/AllCities">
            <Arrow />
          </NavLink>
          <h3 className="homePagetxt"> Want to build your own Mytinerary?</h3>
        </div>
      </div>
    );
  }
}

export default LandingPage;
