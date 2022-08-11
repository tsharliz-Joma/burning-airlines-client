// for the user to search up a flight
import React, { Component, useState } from "react";
import axios from "axios";

const planesUrl = 'http://localhost:3000/flights.json'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      flights: []
    };
  }

 
  componentDidMount(){

    const fetchFlights = () => {
      axios(planesUrl).then((response) => {
        this.setState({ flights: response.data})
      })
    }
    fetchFlights()

  }

  searchFlights(from, to ){
    axios.post(planesUrl, {
      search: {
        from: from,
        to: to
      }
    }).then((response) => {
      this.setState({ flights: [response.data, ...this.state.flights]})
    })
  }

  render() {
    //console.log(this.props);

    return (
      <div>
        <h1>please work dear god</h1>
        <h2>Current user ID: {this.props.currentUser}</h2>

        <SearchForm onSumbit={ this.searchFlights }/>
        <h4> Flight Results </h4>
        <FlightsList  flights={ this.state.flights }/>
        
        {
          this.state.flights.map((flight) => {
          return(
            <div>
              <ul>
                <h3>Flight: { flight.name } </h3>
                <li><em>To:</em> { flight.to }</li>
                <li><em>From:</em> { flight.from }</li>
                <li>Date: { flight.date }</li>
                <li>Plane: { flight.plane }</li>
              </ul>
            </div>
            )
          }
          )
        }
      
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
    setTo("")
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

const FlightsList = (props) => { 
  <div>
    <p> { props.flights.length } Flights Available </p>
    { props.flights.map((f)=> <p key={ f.id }> { f.content } </p>)}
  </div>
}

export default Search;
