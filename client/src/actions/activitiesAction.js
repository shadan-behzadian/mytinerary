import axios from "axios";

export function getActivities() {
  return dispatch => {
    axios.get(`/api/activities`).then(res => {
      dispatch(activityInfo(res.data));
    });
  };
}

export function activityInfo(activitytitle) {
  return {
    type: "ALL_ACTIVITY",
    activities: activitytitle
  };
}

export function getActivitiesByTitle(activitytitle) {
  return dispatch => {
    axios.get(`/api/activities/${activitytitle}`).then(res => {
      dispatch(activitySpecific(res.data));
      console.log(activitytitle);
    });
  };
}

export function activitySpecific(activitytitle) {
  return {
    type: "ADD_SPECIFICACTIVITY",
    activities: activitytitle
  };
}
