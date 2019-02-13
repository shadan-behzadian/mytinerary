import axios from "axios";

export function getItineraries() {
  return dispatch => {
    axios.get(`/api/itineraries`).then(res => {
      dispatch(itineraryInfo(res.data));
      console.log(res.data);
    });
  };
}

export function itineraryInfo(itinerary) {
  return {
    type: "ALL_Itinerary",
    itineraries: itinerary
  };
}

export function getItinerariesByCityName(city) {
  return dispatch => {
    axios
      .get(`/api/itineraries/${city}`)
      // .then(response => {
      //   console.log(response);
      //   if (response.status === 200) {
      //     return response.json();
      //   } else {
      //     throw new Error(response);
      //   }
      // })
      .then(res => {
        dispatch(itineraryInfoByCityName(res.data));
        console.log("from then: ", res.data);
      });
    // .catch(err => {
    //   dispatch(itineraryInfoByCityName(err.response.data));
    // });
  };
}

// "/api/itineraries/" + city

export function itineraryInfoByCityName(city) {
  return {
    type: "BY_CITY_ITINERARY",
    itineraries: city
  };
}

// export function getfavItineraries(fav) {
//   console.log(fav);
//   return dispatch => {
//     dispatch({ type: "GET_FAV", favitineraries: fav });
//   };
// }
