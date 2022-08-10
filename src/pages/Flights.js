import React, { Component } from 'react';
import axios from "axios";

const SERVER_URL = "http://localhost:3000/flights.json"; // IMPORTANT - CHANGE TO AIRPLANES URL PAGE FROM RAILS


class Flights extends Component {
    constructor(){
        super();

        this.state = {
            date: '',
            flightNume: '',
            origin: '',
            destination: '',
            plane: '',
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
                <table>
                    <thead>
                        <tr>
                            <th> Date </th> 
                            <th> Flight </th>
                            <th> From - To</th>
                            <th> Plane </th>
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
                <button>Confirm</button>
            </div>
        )
    }
}

export default Flights 
