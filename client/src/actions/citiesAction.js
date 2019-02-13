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
