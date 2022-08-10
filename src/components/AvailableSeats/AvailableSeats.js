import React, { Component } from "react"
import axios from 'axios'
import './AvailableSeats.css'

const railsBaseUrl = 'https://localhost:3000/search.json'

class AvailableSeats extends Component {
    contructor(){
        super();

        this.state = {
            seats: [],
        }
    }

    componentDidMount(){
        const fetchSeats = () => {
            axios({railsBaseUrl}).then((response) => {
                this.setState({seats: response.data.reservations })
            })
            setTimeout(fetchSeats, 2000)
        }

        fetchSeats()
    }

    saveSeat(content){
        axios.post({railsBaseUrl}, { content: content }).then((response) =>{
            this.setState({seats: [...this.state.seats, response.data]})
        })
    }


    render(){
        return(
            <div> 
                {/* Another option is mapping through every seat that we have an output the available seats*/}
                <h1>Available Seats</h1>
                <div class="seat-container">
                    <div class="seat-row">
                        <div class="seat"> { this.props.seats.map((seat) => <p key={seat.id} className="seat"> {seat.content} {/*Which should be the availability */} </p> )} </div> {/* Within these two divs will be a display with available or Booked/the user name that it belongs to */} {/* Make these two divs inline block so they display left and right of eachother */}
                    </div>
                </div>
            </div>
        )
    }
}


export default AvailableSeats 



