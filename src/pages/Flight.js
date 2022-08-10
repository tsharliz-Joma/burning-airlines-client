// user
// Shows the specific flight seats available on the flight 
// Diagram of plane and seats

import React, { Component } from "react";
import Flights from "./Flights";
import DisplayFlight from "../components/DisplayFlight";
import AvailableSeats from "../components/AvailableSeats/AvailableSeats";




 class Flight extends Component {
    constructor(){
    super();

        this.state = {
            flight_id: '', // This should be recieved from the Flights page 
            user_id: '', // This will be recieved from the login status of the client/user
            row: '',
            col: '',
        }
    }

    // Function that updates the state of the row to the one selected by the user
    _handleSelectedRow(event){
        this.setState({row: event.target.value })
    }

    // Function that updates the col state to the one selected by the user 
    _handleSelectedCol(col, user_id, flight_id){

    }

    // Create a display of the available seats 
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li>Searh</li>
                        <li>Bob</li>
                    </ul>
                </nav>
                <h1>JAC Airlines</h1>
                    <DisplayFlight />

                <div class="Available-seats-contianer">
                    <AvailableSeats />
                </div>
            </div>
        )
    }
 }