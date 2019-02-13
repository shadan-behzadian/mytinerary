import React, { Component } from "react";
import BurgerMenue from "./BurgerMenue";

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <i class="glyphicon glyphicon-menu-hamburger" />
        <BurgerMenue />
      </div>
    );
  }
}

export default SideBar;
