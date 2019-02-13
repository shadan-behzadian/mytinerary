import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      email: this.refs.email.value,
      password: this.refs.password.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const existingUser = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`/api/users/login`, { existingUser }).then(res => {
      console.log(res);
      console.log(res.data);
      localStorage.setItem("token", "Bearer " + res.data.token);
    });
    console.log("submitted with the following data ");
    console.log(this.state);
  };

  render() {
    console.log(this.state.email);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>E-Mail Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              ref="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              ref="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div>
            <button>Sign In</button> <Link to="/SignUp">create an account</Link>
          </div>
        </form>

        <button>Google+</button>
      </div>
    );
  }
}

export default LogIn;
