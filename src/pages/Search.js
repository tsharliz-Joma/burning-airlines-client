// for the user to search up a flight
import React, { Component, useState } from "react";
import axios from "axios";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
    };
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>please work dear god</h1>
        <h2>Current user ID: {this.props.currentUser}</h2>

        <SearchForm />
      </div>
    );
  }
}

const SearchForm = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const _handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(from);
    //reset state
    setFrom("");
  };

  const _handleFrom = (event) => {
    setFrom(event.target.value);
  };

  const _handleTo = (event) => {
    setTo(event.target.value);
  };

  return (
    <form onSubmit={_handleSubmit}>
      <input onChange={_handleFrom} placeholder="From" />
      <input onChange={_handleTo} placeholder="To" />
      <button>Search Flights</button>
    </form>
  );
};

export default Search;
