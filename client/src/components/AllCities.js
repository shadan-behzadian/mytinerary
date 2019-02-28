import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCities } from "../actions/citiesAction";
import { Link } from "react-router-dom";

class AllCities extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  //methode to make the filter search
  updateSearch(event) {
    // console.log(event.target.value);
    this.setState({ search: event.target.value });
  }

  componentDidMount() {
    console.log("1");
    this.props.getAllCities();
  }

  render() {
    //added for earch bar
    console.log(this.props.cities);
    let filteredCities = this.props.cities.filter(theCity => {
      return (
        theCity.city.toUpperCase().indexOf(this.state.search.toUpperCase()) !==
        -1
      );
    });
    console.log("4");

    return (
      <div className="AllCities">
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        {/* <h1>this is the page for all cities!!!</h1> */}

        <div>
          {filteredCities.map(city => (
            <Link to={`/itineraries/${city.city}`} key={city.city}>
              <p className="cityPagemain" id={city._id}>
                {city.city}
              </p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

export default connect(
  mapStateToProps,
  { getAllCities }
)(AllCities);
