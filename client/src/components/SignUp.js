import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    email: ""
    // hasAgreed: false
  };

  handleChange = e => {
    this.setState({
      name: this.refs.name.value,
      password: this.refs.password.value,
      email: this.refs.email.value
      // hasAgreed: e.target.type === "checkbox" ? e.target.checked : target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
      // date: new Date()
    };

    axios.post(`/api/users/signup`, { newUser }).then(res => {
      console.log(res);
      console.log(res.data);
    });
    // console.log("submitted with the following data ");
    // console.log(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              name="name"
              onChange={this.handleChange}
              ref="name"
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
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>E-Mail Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              ref="email"
              onChange={this.handleChange}
            />
          </div>

          {/* <div>
            <label>
              <input
                type="checkbox"
                name="hasAgreed"
                ref="hasAgreed"
                onChange={this.handleChange}
              />
              I agree all statements in <a href="">terms of service</a>
            </label>
          </div> */}

          <div>
            <button>Sign Up</button> <Link to="/LogIn">I'm already member</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
