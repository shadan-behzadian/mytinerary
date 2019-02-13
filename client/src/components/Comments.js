import React, { Component } from "react";
//import axios from "axios";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";
import { getCommentsByItneraryTitle } from "../actions/commentAction";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    // axios.get(`/api/comments`).then(res => {
    //   console.log(res);
    //   this.setState({ comments: res.data });
    // });
    console.log(this.props.itinerary);
    if (this.props.itinerary) {
      this.props.getCommentsByItneraryTitle(this.props.comments);
    }
  }

  render() {
    const comments = this.props.comments.filter(
      e => e.itineraryReference === this.props.itinerary
    );
    return (
      <div className="Comments">
        Comments:
        {comments.map((comment, index) => (
          <div key={index}>
            <p>
              <strong>{comment.user}</strong>:{comment.message}
              {/* <button className="removeComment">&times;</button> */}
            </p>
          </div>
        ))}
        <CommentForm itinerary={this.props.itinerary} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(
  mapStateToProps,
  { getCommentsByItneraryTitle }
)(Comments);
