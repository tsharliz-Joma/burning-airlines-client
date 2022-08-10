import React, { Component } from "react";

class Search extends Component {
  // So im thinking that we will need to render flight options from the backend ?
  _renderFlightOptions() {
    return Object.keys(this.state).map((key) => {
      return <li> {key} </li>;
    });
  }

  _handleOrigin = (e) => {
    this.setState({ origin: e.target.origin });
  };

  _handleDestination = (e) => {
    this.setState({ destination: e.target.destination });
  };

  _handleSearch = (e) => {
    e.preventDefault();
    this.props.SearchFlights(this.state.origin, this.state.destination);
  };

  render() {
    return (
      <div>
        <div classs="search-entry-fields">
          <input onChange={this._handleOrigin} placeholder="From" />
          <input onChange={this._handleDestination} placeholder="To" />
        </div>
        <div>
          <a onClick={this._handleSearch}>Search Flights</a>
        </div>
      </div>
    );
  }
}

export default Search;