import React, { Component } from "react";
import LandingPage from "./LandingPage";

import { Route, Switch } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import AllCities from "./AllCities";

import Notfound from "./NotFound";
import Itinerary from "./Itinerary";
import Activities from "./Activities";
import Fav from "./Favourites";
import Profile from "./Profile";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/AllCities" component={AllCities} />
        <Route path="/itineraries/:city" component={Itinerary} />
        <Route path="/activities/:activitytitle" component={Activities} />
        <Route path="/profile" component={Profile} />
        <Route path="/fav" component={Fav} />
        <Route component={Notfound} />
      </Switch>
    );
  }
}

export default Router;
