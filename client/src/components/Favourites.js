import React, { Component } from "react";
import axios from "axios";
import { getCurrentUser } from "../actions/currentUserAction";
//import { getfavItineraries } from "../actions/itinerariesAction";
import { connect } from "react-redux";

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: []
    };
  }

  componentDidMount() {
    // console.log("1");
    // axios
    //   .get(`/api/users/currentUser`, {
    //     withCredentials: true,
    //     headers: { Authorization: localStorage.getItem("token") }
    //   })
    //   .then(res => {
    //     console.log(res);

    //     this.setState({ allOfThem: res.data[0].favouriteItineraries });
    //   });

    this.props.getCurrentUser();
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.getfavItineraries("5bf43d011393550725e4e17b");
    const favIds = nextProps.users.favouriteItineraries;
    console.log(favIds);
    axios
      .post(`/api/itineraries/fav`, { favIds })
      .then(res => this.setState({ favorite: res.data }));
  }

  render() {
    //console.log(this.props.users.favouriteItineraries);

    console.log(this.state.favorite.length);
    console.log(this.state.favorite);

    return (
      <div className="favs">
        My Likes
        {this.state.favorite.map((fav, i) => (
          <div key={i}>
            <p className="itineraryTitle" key={fav.title}>
              {fav.title}
            </p>
            <div key={fav.profilePic} className="itineraryProfilePic">
              <img
                className="profilePic"
                src={fav.profilePic}
                alt="profilepic"
              />
            </div>
            <p className="itineraryRating" key={fav.rating}>
              Likes: {fav.rating}
            </p>
            <p className="itineraryDuration" key={fav.duration}>
              {fav.duration} hours
            </p>
            <p className="itineraryPrice" key={fav.price}>
              ${fav.price}
            </p>
            <p className="itineraryHashtag" key={fav.hashtag}>
              {fav.hashtag}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    favitineraries: state.itineraries
  };
};
export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Favourites);

//export default Favourites;
