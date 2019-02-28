import axios from "axios";

export function getAllCities() {
  return dispatch => {
    axios.get(`/api/cities`).then(res => {
      dispatch(cityInfo(res.data));
    });
  };
}

export function cityInfo(city) {
  return {
    type: "ADD_City",
    cities: city
  };
}

export function removeCity(cityToDelete) {
  return dispatch => {
    axios
      .delete(`/api/cities/${cityToDelete}`, {
        withCredentials: true,
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res.data);
      });
  };
}

// export function cityInfo(city) {
//   return {
//     type: "ADD_City",
//     cities: city
//   };
// }
