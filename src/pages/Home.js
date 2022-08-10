import React, { Component } from "react";
import Login from "../auth/Login";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/search");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <h2>Hello user ID#{this.props.currentUser}</h2>
        <Login
          handleSuccessfulAuth={this.handleSuccessfulAuth}
        />

      <button onClick={this.props.handleLogout}>Logout</button>
      </div>
    );
  }
}