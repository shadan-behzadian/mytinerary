const initState = {
  cities: [
    // {
    //   country: "Italy",
    //   city: "Milan"
    // }
  ],
  itineraries: [
    // {
    //   city: "tehran",
    //   title: "walking tour",
    //   profilePic: "photo URL",
    //   rating: 5,
    //   duration: 3,
    //   price: 200,
    //   hashtag: "#siteseeng#fun#lifestyle"
    // }
  ],
  activities: [],
  comments: [],
  users: []
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_City") {
    return {
      ...state,
      cities: action.cities
    };
  }
  if (action.type === "ALL_Itinerary") {
    return {
      ...state,
      itineraries: action.itineraries
    };
  }
  if (action.type === "BY_CITY_ITINERARY") {
    return {
      ...state,
      itineraries: action.itineraries
    };
  }
  if (action.type === "ALL_ACTIVITY") {
    return {
      ...state,
      activities: action.activities
    };
  }
  if (action.type === "ADD_SPECIFICACTIVITY") {
    return {
      ...state,
      activities: state.activities.concat(action.activities)
    };
  }
  if (action.type === "ALL_COMMENTS") {
    return {
      ...state,
      comments: action.comments
    };
  }
  if (action.type === "BY_ITINERARY_COMMENT") {
    return {
      ...state,
      comments: state.comments.concat(action.comments)
    };
  }
  // if (action.type === "GET_FAV") {
  //   console.log("innnnnn");
  //   console.log(action.favitineraries);
  //   return {
  //     ...state,
  //     itineraries: [
  //       ...state.itineraries.filter(
  //         state.itineraries._id === action.favitineraries
  //       )
  //     ]
  //   };
  // }
  if (action.type === "GET_CURRENT_USER") {
    console.log(action.users);
    return {
      ...state,
      users: action.users
    };
  } else {
    return {
      ...state
    };
  }
};

export default rootReducer;
