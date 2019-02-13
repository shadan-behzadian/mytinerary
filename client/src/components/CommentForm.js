import React, { Component } from "react";
import axios from "axios";
import { getCurrentUser } from "../actions/currentUserAction";
import { connect } from "react-redux";
// import axios from "axios";

class CommentForm extends Component {
  state = {
    user: null,
    message: null,
    selectedItinerary: null
  };

  componentDidMount() {
    this.props.getCurrentUser();
    console.log(this.props.itinerary);

    // if (this.props.itinerary) {
    //   this.props.getCommentsByItneraryTitle(this.props.comments);
    // }
    this.setState({
      selectedItinerary: this.props.itinerary
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.users);
    this.setState({
      user: nextProps.users.name
    });
    //const currentUser = nextProps.users
  }

  handleChange = e => {
    this.setState({
      message: this.refs.message.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newPost = {
      user: this.state.user,
      message: this.state.message,
      itineraryReference: this.state.selectedItinerary,
      date: new Date()
    };

    this.refs.message.value = "";

    console.log(newPost);

    axios
      .post(
        `/api/comments`,
        { newPost },
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
    console.log(this.state.user);
    console.log(this.state.message);
    console.log(this.props.users);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            required
            ref="message"
            placeholder="comment"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
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
)(CommentForm);

//export default CommentForm;
