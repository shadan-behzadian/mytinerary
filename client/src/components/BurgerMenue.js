import { slide as Menu } from "react-burger-menu";
import React from "react";
import { NavLink } from "react-router-dom";

class BurgerMenue extends React.Component {
  // showSettings(event) {
  //   event.preventDefault();
  // }

  render() {
    return (
      <Menu right width={"15%"}>
        <NavLink id="home" className="menu-item" to="/LogIn">
          LogIn
        </NavLink>

        <NavLink id="about" className="menu-item" to="/SignUp">
          Create Account
        </NavLink>

        {/* <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a> */}
      </Menu>
    );
  }
}

export default BurgerMenue;
