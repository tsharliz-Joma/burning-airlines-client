import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Search from '../pages/Search';
import Home from '../pages/Home';
import Login from '../auth/Login';
import Airplanes from '../pages/Airplanes';
import Flight from '../pages/Flight';
import Flights from '../pages/Flights';
// import Registration from "../auth/Registration";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      currentUser: undefined,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  checkLoginStatus() {
    axios
      .get('http://localhost:3000/logged_in', { withCredentials: true })
      .then((response) => {
        console.log('TEST', response);
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            currentUser: response.data.user.id,
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === 'LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
          });
        }
      })
      .catch((error) => {
        console.log('login error', error);
      });
  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    console.log('logging in', data);
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      currentUser: data.user.id,
    });
    window.location.href = '/search';
  }

  handleLogout() {
    console.log('trying to logout');
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      currentUser: undefined,
    });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  loggedInStatus={this.state.loggedInStatus}
                  currentUser={this.state.currentUser}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                />
              }
            />
            <Route path="login" element={<Login />} />
            <Route
              path="search"
              element={
                <Search
                  loggedInStatus={this.state.loggedInStatus}
                  currentUser={this.state.currentUser}
                  handleLogout={this.handleLogout}
                />
              }
            />
            <Route path="airplanes" element={<Airplanes />} />
            <Route path="flights" element={<Flights />} />
            <Route path="flight">
              <Route
                path=":flightId"
                element={<Flight currentUser={this.state.currentUser} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
