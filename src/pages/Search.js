// for the user to search up a flight
import React, { Component } from 'react';
import Flights from '../Flight/Flights';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            origin: '',
            destination: '',
        }

        this._handleOrigin = this._handleOrigin.bind(this)
        this._handleDestination = this._handleDestination(this)
    }

    _handleOrigin(event){
        this.setState({origin: event.target.origin})
    }

    _handleDestination(event){
        this.setState({destination: event.target.destination})
    }

    // So im thinking that we will need to render flight options from the backend ?
    _renderFlightOptions(){
        return( 
            Object.keys(this.state).map(key => {
                return(
                    <li> {key} </li>
                )
            })
        )
    }

    _handleSearch(event){
        event.preventDefault();
        this.props.SearchFlights(this.origin, this.destination)
    }
}