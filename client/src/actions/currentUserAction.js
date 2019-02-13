import axios from "axios";

export function getCurrentUser() {
  console.log("innnnn");
  return dispatch => {
    axios
      .get(`/api/users/currentUser`, {
        withCredentials: true,
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res.data[0]);
        dispatch(currentUser(res.data[0]));
      });
  };
}

export function currentUser(users) {
  console.log(users);
  return {
    type: "GET_CURRENT_USER",
    users: users
  };
}
