import React, { Component } from "react";
import Favourites from "./Favourites";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../actions/currentUserAction";
import { connect } from "react-redux";
import axios from "axios";

class Profile extends Component {
  state = {
    detail: {
      id: "5c18c5f8288fef047d9cc9e8",
      name: "shadan",
      password: "12345"
    }
  };

  componentDidMount() {
    this.props.getCurrentUser();
  }

  // updateDetail = () => {
  //   console.log("yes clicked");
  //   const detail = {
  //     id: this.state.id,
  //     name: this.state.name,
  //     password: this.state.password
  //   };
  //   axios
  //     .put(`/api/users/updateDetails/${this.state.detail.id}`, { detail })
  //     .then(res => console.log(res));
  // };

  render() {
    console.log(this.props.users);
    return (
      <div className="Profile">
        <p>your profile </p>

        <div>
          <p>you are logged in as :{this.props.users.name}</p>
        </div>

        <div className="profileNavBar">
          <Link to="/fav" className="space">
            <button className="profileButton"> My likes</button>
          </Link>
          <Link to="/admin" className="space">
            <button className="profileButton"> Admin</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Profile);
