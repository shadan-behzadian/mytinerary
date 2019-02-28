import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div className="profileNavBar">
        <Link to="/cityAdmin" className="space">
          <button className="profileButton">Edit cities page</button>
        </Link>
        <Link to="/mytineraryAdmin">
          <button className="profileButton">Edit mytinerary page</button>
        </Link>
      </div>
    );
  }
}

export default Admin;
