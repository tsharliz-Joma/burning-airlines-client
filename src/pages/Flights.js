import React, { Component, useState } from 'react';
import axios from "axios";

const SERVER_URL = "http://localhost:3000/flights.json"; // IMPORTANT - CHANGE TO AIRPLANES URL PAGE FROM RAILS

class Flights extends Component {
    constructor() {
      super();
      this.state = {
        flights: [],
      };
  
      this.saveFlight = this.saveFlight.bind(this);
    }


    componentDidMount() {
        //        REFRESHES THE PAGE WITH POLLING WITH UPDATES AIRPLANES DATA
        const fetchFlights = () => {
          axios(SERVER_URL).then((response) => {
            this.setState({ flights: response.data });
          });
          setTimeout(fetchFlights, 9000);
        };
        const fetchAirplanes = () => {
            axios(SERVER_URL).then((response) => {
                this.setState({ airplanes: response.data });
            });
        }
        fetchAirplanes();
        console.log("we are fetching airplanes")
        fetchFlights();
      }

    saveFlight(content) {
        //         SAVES AIRPLANE DATA TO THE DATABASE
        axios.post(SERVER_URL, { 
            flight: {
                name: content.name,
                date: content.date,
                from: content.from,
                to:   content.to,
                plane: content.plane
        } }).then((response) => {
          this.setState({ flights: [response.data, ...this.state.flights] });
        });
      }

      render() {
        return (
          <div>
            <h1>ADMIN: Chart a new flight into the skies</h1>
            <FlightForm onSubmit={this.saveFlight} />
            <FlightsList flights={this.state.flights} />
          </div>
        );
      }
    }

    const FlightForm = (props) => {
        const [content, setContent] = useState("");
      
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
        setContent("");
    };

    const _handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContent((values) => ({ ...values, [name]: value }));
        };

        return (
            <form onSubmit={_handleSubmit}>
              <input
                onChange={_handleChange}
                name="name"
                type="text"
                placeholder="name"
                required
              />
              <input
                onChange={_handleChange}
                name="date"
                type="date"
                placeholder="date"
                required
              />
              <input
                onChange={_handleChange}
                name="from"
                type="text"
                placeholder="from"
                required
              />
                <input
                onChange={_handleChange}
                name="to"
                type="text"
                placeholder="to"
                required
              />
                <input
                onChange={_handleChange}
                name="plane"
                type="text"
                placeholder="plane"
                required
              />

              <label for="planes">Choose a plane:
              <select value="" onChange={_handleChange}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            </select>
            </label>
              <input type="submit" value="Create New Flight" />
            </form>
          );
        };

        const FlightsList = (props) => {
            return (
              <div>
                <h3>There are {props.flights.length} total flights scheduled to fly. </h3>
          
          
                {props.flights.map((f) => (
                  <p> Flight Number: { f.name } Date: {f.date} From: {f.from} To: {f.to} Airplane: {f.plane} <br></br></p>
                  
                ))}
              </div>
            );
          };


export default Flights