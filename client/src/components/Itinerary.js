import React, { Component } from "react";
import { connect } from "react-redux";
import { getItinerariesByCityName } from "../actions/itinerariesAction";
import Activities from "./Activities";
import axios from "axios";
import Favourites from "./Favourites";

class Itineraries extends Component {
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
    console.log("wow");
    axios
      .get(`/api/users/currentUser`, {
        withCredentials: true,
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        console.log(res.data[0]._id);
        this.setState({ currentUserId: res.data[0]._id });
      });
    console.log("Nooooo");
  }

  selectItinerary(itinerary) {
    this.setState({ selectedItinerary: itinerary });
    console.log(itinerary);
  }

  favButton = e => {
    this.setState({ favBtnSelected: e.target.id });
    const fav = e.target.id;
    console.log(fav);
    axios.put(`/api/users/${this.state.currentUserId}`, { fav }).then(res => {
      console.log(res.data);
    });
  };

  render() {
    console.log(this.props.itineraries);
    //console.log("props: ", this.props);
    //console.log("state: ", this.state.itineraries);
    console.log(this.state.favBtnSelected);
    // console.log(this.props.match.params);
    if (this.props.itineraries.error) {
      return <div>{this.props.itineraries.error}</div>;
    } else {
      return (
        <div className="Itinerary">
          {this.props.itineraries.map((itinerary, index) => (
            <div key={index}>
              <button id={itinerary._id} onClick={this.favButton}>
                my favourite
              </button>
              <div
                className="itineraryTitle"
                key={itinerary.title}
                onClick={() => this.selectItinerary(itinerary.title)}
              >
                {itinerary.title}

                <Activities
                  itinerary={itinerary.title}
                  isVisible={this.state.selectedItinerary === itinerary.title}
                />
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
          ))}
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};
export default connect(
  mapStateToProps,
  { getItinerariesByCityName }
)(Itineraries);
