import React, { Component } from 'react';
import './Flights.css'

// Im unsure if we will need this, this is creating a flight as an admin 
// This Page is to display all the available flights , so the referring to the burning airlines brief /flights page 
class Flights extends Component {
    constructor(){
        super();

        this.state = {
            date: '',
            flightNume: '',
            origin: '',
            destination: '',
            plane: '',
            seat: '', // Let the user select a seat? 
        }
    }




    render(){
        return(
            <div className="Flight">
                
                <div className="CreateFlight">
                    <input placeholder="flight number" type="text"></input>
                    <input placeholder="date" type="text"></input>
                    <input placeholder="to" type="text"></input>
                    <input placeholder="from" type="text"></input>
                </div>
                {/* */}
                <table>
                    <thead>
                        <tr>
                            <th> Date </th> 
                            <th> Flight </th>
                            <th> From - To</th>
                            <th> Plane </th>
                            <th> Seats </th>
                        </tr>
                         <tr>
                            <td>12/04/2022</td>
                            <td>47</td>
                        </tr>
                        <tr>
                            <td>12/04/2022</td>
                            <td>64</td>
                            
                        </tr>
                        <tr>
                            <td>12/04/2022</td>
                            <td>34</td>
                        </tr>
                            
                    </thead>
                    
                </table>

                <button>Cancel</button>
                <button>Confirm</button> {/* On Confirm This renders The Reservation Page  */}

            </div>
        )
    }
}

export default Flights 
