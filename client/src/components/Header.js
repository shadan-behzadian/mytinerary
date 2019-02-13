import React, { Component } from "react";
import BurgerMenue from "../components/BurgerMenue";
import UserLogIn from "../components/UserLogIn";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/profile">
          <UserLogIn />
        </Link>

        <BurgerMenue />
      </div>
    );
  }
}

export default Header;
