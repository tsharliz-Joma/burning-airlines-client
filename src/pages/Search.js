// for the user to search up a flight
import React, { Component, useState } from "react";
import '../components/Css/App.css'
import axios from "axios";

const SEARCH_URL = `http://localhost:3000/search/`

class Search extends Component {
  render() {
    return (
      <div className="container">
        <h1>please work dear god</h1>
        <h2>Current user ID: {this.props.currentUser}</h2>

        <SearchForm />
      </div>
    );
  }

}

const SearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [flights, setFlights] = useState([{}]);

  const _handleSubmit = (event) => {
    event.preventDefault();
    axios(SEARCH_URL + from + '/' + to + '.json').then((response) => {
      setFlights(response.data);
    })

    setFrom("");
    setTo("");
  };

  const _handleFrom = (event) => {
    setFrom(event.target.value);
  };

  const _handleTo = (event) => {
    setTo(event.target.value);
  };

  return (
    <div class="flames">
      <form onSubmit={_handleSubmit}>
        <input onChange={_handleFrom} placeholder="From" />
        <input onChange={_handleTo} placeholder="To" />
        <button>Search Flights</button>
        
      </form>
      
      <h4> Flight Results </h4>
        <FlightsList  flights={ flights }/>
        </div>
  );
};

const FlightsList = (props) => { 
return (
<div >
  <p> Flights Available </p>

  <table class="flames">
  <tr>
    <th>Date</th>
    <th>Flight</th>
    <th>From-To</th>
    <th>Plane</th>
  </tr>
  { props.flights.map((f) => (
    <tr>
    <td>{f.date}</td>
    <td><a href={`/flight/${f.id}`}>{f.name}</a></td>
    <td>{f.from} To {f.to}</td>
    <td>{f.plane}</td>
    </tr>
  )) }
  </table>
  <img src={"../src/images/fire-animated.gif"} alt="horse" /> 
  <img src={"../src/images/fire.jpeg"} alt="fire" />
</div>
);
}

export default Search;
