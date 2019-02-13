import React, { Component } from "react";
import { connect } from "react-redux";
import { getActivitiesByTitle } from "../actions/activitiesAction";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Comments from "./Comments";

class Activities extends Component {
  state = {
    activities: [],
    isVisible: false
  };
  componentDidMount() {
    console.log(this.props.itinerary);
    if (this.props.itinerary) {
      this.props.getActivitiesByTitle(this.props.itinerary);
      // this.setState({ itinerary: this.props.itinerary });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.isVisible);
    this.setState({ isVisible: nextProps.isVisible });
  }
  render() {
    const activities = this.props.activities.filter(
      e => e.itineraryReference === this.props.itinerary
    );
    console.log(this.props.activities);
    return (
      <div style={{ display: this.state.isVisible ? "inline" : "none" }}>
        <Slider>
          {activities.map((activity, index) => (
            <div key={index}>
              <div>
                <h2>{activity.title}</h2>
                <img src={activity.image} alt="activityPhoto" />
              </div>
            </div>
          ))}
        </Slider>

        <Comments itinerary={this.props.itinerary} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};

export default connect(
  mapStateToProps,
  { getActivitiesByTitle }
)(Activities);
