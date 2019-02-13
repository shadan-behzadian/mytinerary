import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavLink to="/">
          <span className="glyphicon glyphicon-home " />
        </NavLink>
      </div>
    );
  }
}

export default Home;
