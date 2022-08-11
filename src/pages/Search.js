// for the user to search up a flight
import React, { Component, useState } from "react";
import axios from "axios";

const SEARCH_URL = `http://localhost:3000/search/`

class Search extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     from: "",
  //     to: "",
  //     flights: []
  //   };

  //   this.searchFlights = this.searchFlights.bind(this)
  // }

  render() {
    return (
      <div>
        <h1>please work dear god</h1>
        <h2>Current user ID: {this.props.currentUser}</h2>

        <SearchForm />
        
        {/* {
          this.state.flights.map((flight) => {
          return(
            <div>
              <ul>
                <h3>Flight: { flight.name } </h3>
                <li><em>To:</em> { flight.to }</li>
                <li><em>From:</em> { flight.from }</li>
                <li>Date: { flight.date } </li>
                <li>Plane: { flight.plane } </li>
              </ul>
            </div>
            )
          }
          )
        } */}
      
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
    <div>
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
  <div>
  <p> { props.flights.length } Flights Available </p>
  <table>
  <tr>
    <th>Date</th>
    <th>Flight</th>
    <th>From-To</th>
    <th>Plane</th>
  </tr>
  { props.flights.map((f) => (
    <tr>
    <td>{f.date}</td>
    <td>{f.name}</td>
    <td>{f.from} to {f.to}</td>
    <td>{f.plane}</td>
    </tr>
  )) }
  </table>
  
</div>
);
}

export default Search;
