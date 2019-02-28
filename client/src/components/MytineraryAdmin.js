import React, { Component } from "react";

import { getItineraries } from "../actions/itinerariesAction";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MytieraryAdmin extends Component {
  state = {
    selectedCity: null
  };

  componentDidMount() {
    this.props.getItineraries();
  }

  handleClick = e => {
    this.setState({
      selectedCity: e.target.id
    });
  };

  render() {
    console.log(this.state.selectedCity);
    return (
      <div>
        <p>Cities with existing Itineraries</p>
        {this.props.itineraries.map(cityName => (
          <Link to={`/itinerariesAdmin/${cityName.city}`} key={cityName._id}>
            <button
              key={cityName._id}
              id={cityName.city}
              onClick={this.handleClick}
              className="profileButton"
            >
              {cityName.city}
            </button>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};
export default connect(
  mapStateToProps,
  { getItineraries }
)(MytieraryAdmin);
