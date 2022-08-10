import React, { Component } from 'react';
import Flights from '../pages/Flights';


class DisplayFlight extends Component {
    return (){
        return (
            <div>
                <ul>
                    <li> { this.props.flights.date } </li>
                    <li> { this.props.flights.plane } </li>
                    <li> { this.props.flights.from } to { this.props.flights.to }</li>
                </ul>
            </div>
        )
    }
}

export default DisplayFlight 