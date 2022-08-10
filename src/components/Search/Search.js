import React, { Component } from 'react';



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

    _renderFlightOptions(){
        return( 
            Object.keys(this.state).map(key => {
                return(
                    <li> {key} </li>
                )
            })
        )
    }
}