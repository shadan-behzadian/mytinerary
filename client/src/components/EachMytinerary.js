import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getItinerariesByCityName,
  removeItinerary
} from "../actions/itinerariesAction";
import axios from "axios";

class EachMytinerary extends Component {
  state = {
    itineraries: [],
    selectedItinerary: "",
    favBtnSelected: "",
    currentUserId: "",
    city: null,
    title: null,
    profilepic: null,
    rating: null,
    price: null,
    duration: null,
    hashtag: null
  };

  componentDidMount() {
    if (this.props.match.params.city) {
      this.props.getItinerariesByCityName(this.props.match.params.city);
    }
  }

  toRemove = e => {
    console.log(e.target.id);
    const itineraryToDelete = e.target.id;
    let confirmDelete = window.confirm(
      "are you sure you want to delete this mytinerary? you can not reverse this action?"
    );
    if (confirmDelete) {
      this.props.removeItinerary(itineraryToDelete);
    }
  };

  handleChange = e => {
    this.setState({
      city: this.refs.city.value,
      title: this.refs.title.value,
      profilepic: this.refs.profilepic.value,
      rating: this.refs.rating.value,
      price: this.refs.price.value,
      duration: this.refs.duration.value,
      hashtag: this.refs.hashtag.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newMytinerary = {
      city: this.state.city,
      title: this.state.title,
      profilepic: this.state.profilepic,
      rating: this.state.rating,
      price: this.state.price,
      duration: this.state.duration,
      hashtag: this.state.hashtag
    };

    this.refs.city.value = "";
    this.refs.title.value = "";
    this.refs.profilepic.value = "";
    this.refs.rating.value = "";
    this.refs.price.value = "";
    this.refs.duration.value = "";
    this.refs.hashtag.value = "";

    console.log(newMytinerary);

    axios
      .post(
        `/api/itineraries/addMytinerary`,
        { newMytinerary },
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
    return (
      <div className="Itinerary">
        {this.props.itineraries.map((itinerary, index) => (
          <div key={index} className="EachMytinerary">
            <div>
              <div className="itineraryTitle" key={itinerary.title}>
                {itinerary.title}
              </div>
              <div className="itineraryProfilePic" key={itinerary.profilePic}>
                <img
                  className="profilePic"
                  src={itinerary.profilePic}
                  alt="profile Pic"
                />
              </div>
              <p className="itineraryRating" key={itinerary.rating}>
                Likes: {itinerary.rating}
              </p>
              <p className="itineraryDuration" key={itinerary.duration}>
                {itinerary.duration} hours
              </p>
              <p className="itineraryPrice" key={itinerary.price}>
                ${itinerary.price}
              </p>
              <p className="itineraryHashtag" key={itinerary.hashtag}>
                {itinerary.hashtag}
              </p>
            </div>
            <div>
              <button id={itinerary._id} onClick={this.toRemove}>
                {" "}
                X{" "}
              </button>
            </div>
          </div>
        ))}

        <form onSubmit={this.handleSubmit} className="mytineraryForm">
          <input
            type="text"
            required
            ref="city"
            placeholder="city"
            readOnly
            value={this.props.match.params.city}
          />
          <input
            type="text"
            required
            ref="title"
            placeholder="title"
            onChange={this.handleChange}
          />
          <input
            type="text"
            required
            ref="profilepic"
            placeholder="profilepic"
            onChange={this.handleChange}
          />

          <input
            type="number"
            required
            ref="rating"
            placeholder="0"
            readOnly
            value={0}
          />

          <input
            type="text"
            required
            ref="price"
            placeholder="price"
            onChange={this.handleChange}
          />

          <input
            type="text"
            required
            ref="duration"
            placeholder="duration in minutes"
            onChange={this.handleChange}
          />

          <input
            type="text"
            required
            ref="hashtag"
            placeholder="hashtag"
            onChange={this.handleChange}
          />

          <input type="submit" value="save" className="submitBtn" />
        </form>
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
  { getItinerariesByCityName, removeItinerary }
)(EachMytinerary);
