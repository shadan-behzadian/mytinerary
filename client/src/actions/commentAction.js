import axios from "axios";

export function getComments() {
  return dispatch => {
    axios.get(`/api/comments`).then(res => {
      dispatch(allComments(res.data));
      console.log(res.data);
    });
  };
}

export function allComments(comment) {
  return {
    type: "ALL_COMMENTS",
    comments: comment
  };
}

export function getCommentsByItneraryTitle(title) {
  return dispatch => {
    axios.get(`/api/comments/${title}`).then(res => {
      dispatch(commentInfoByItineraryTitle(res.data));
      console.log(res.data);
    });
  };
}

export function commentInfoByItineraryTitle(title) {
  return {
    type: "BY_ITINERARY_COMMENT",
    comments: title
  };
}
