import React, { Component } from "react"



class Reservation extends Component {
    constructor(){
        super();

        this.state = {
            date: '',
            flightNum: '',
            origin: '',
            destination: '',
            availableSeats: '', //{/* This Maybe holds an object/array of available seats */}
            
        }

    }


    render(){
        return(
            <div>
                 
            </div>
        )
    }
}


export default Reservation