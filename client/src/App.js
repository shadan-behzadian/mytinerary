import React, { Component } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Router from "./components/Router";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Router />
          <Footer />
          <div>hi</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
