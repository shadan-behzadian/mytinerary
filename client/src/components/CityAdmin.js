import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCities, removeCity } from "../actions/citiesAction";
import axios from "axios";

class CityAdmin extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      city: null,
      country: null
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

  toRemove = e => {
    console.log(e.target.id);
    const cityToDelete = e.target.id;
    let confirmDelete = window.confirm(
      "are you sure you want to delete this city? This action will remove all the Mytineraries for this City.You can not reverse this action?"
    );
    if (confirmDelete) {
      this.props.removeCity(cityToDelete);
      // Axios.delete(`/api/cities/${cityToDelete}`, {
      //   withCredentials: true,
      //   headers: { Authorization: localStorage.getItem("token") }
      // }).then(res => {
      //   console.log(res.data);
      // });
    }
  };
  handleChange = e => {
    this.setState({
      city: this.refs.city.value,
      country: this.refs.country.value
    });
  };

  handleSubmit = e => {
    const newCity = {
      city: this.state.city,
      country: this.state.country
    };

    this.refs.city.value = "";
    this.refs.country.value = "";

    console.log(newCity);

    axios
      .post(
        `/api/cities/add`,
        { newCity },
        {
          withCredentials: true,
          headers: { Authorization: localStorage.getItem("token") }
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

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
            <div className="removeCityPage">
              <div className="cityPage" key={city._id}>
                {city.city}
              </div>
              <div className="removeBtn">
                <button onClick={this.toRemove} id={city._id}>
                  {" "}
                  X{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cityAdmin">
          <div>add a new city</div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              required
              ref="city"
              placeholder="city"
              onChange={this.handleChange}
            />
            <input
              type="text"
              required
              ref="country"
              placeholder="country"
              onChange={this.handleChange}
            />
            <input type="submit" value="save" />
          </form>
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
  { getAllCities, removeCity }
)(CityAdmin);
