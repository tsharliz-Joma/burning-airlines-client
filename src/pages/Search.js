// for the user to search up a flight
import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            origin: '',
            destination: '',
            flights: []
        }

        this._handleOrigin = this._handleOrigin.bind(this)
        this._handleDestination = this._handleDestination(this)
    }

    _fetchFlights() { // Fetch the flights 
        const res = axios(  + `/${this.state.origin}` + `/${this.state.destination}`).then((response) => {
            this.setState({flights: [...this.state.flights, res.data]})
        })
    }

    // So im thinking that we will need to render flight options from the backend ?
    _renderFlightOptions(){
        return( 
            Object.keys(this.state.flights).map(flight => {
                return(
                    <ul>
                        <li> { flight.from } </li>
                        <li> { flight.to } </li>
                        <li> { flight.date }</li>
                    </ul>
                )
            })
        )
    }
    
        _handleOrigin = (e) => {
            this.setState({origin: e.target.origin})
        };
        
        _handleDestination = (e) => {
            this.setState({destination: e.target.destination})
        };
    
        _handleSearch = (e) => {
            e.preventDefault();
            this.props.SearchFlights()
        };

    render(){
        return (
            <div>
                <form onSubmit={ this._handleSearch }>
                        <input onChange={ this._handleOrigin } placeholder="From" />
                        <input onChange={ this._handleDestination } placeholder="To" /> 
                    <button>Search Flights</button>
                </form>

                <tr> 
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </div>
            
        )
    };
}

export default SearchBar 



    

    
