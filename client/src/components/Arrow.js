import React, { Component } from "react";
import arrow from "../img/arrow.png";

class Arrow extends Component {
  render() {
    return (
      <div className="HomeImagesCenter">
        <img className="arrow" src={arrow} alt="arrowLogo" />
      </div>
    );
  }
}

export default Arrow;
