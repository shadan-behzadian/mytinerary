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
    currentUserId: ""
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
