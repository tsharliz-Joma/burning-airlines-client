import React, { Component } from "react"
import axios from 'axios'
import './AvailableSeats.css'


class AvailableSeats extends Component {
    contructor(){
        super();

        this.state = {
            seats: [] 
        }
    }

    componentDidMount(){
        const fetchSeats = () => {
            axios({/*URL HERE*/}).then((response) => {
                this.setState({seats: response.data.reservations })
            })
            setTimeout(fetchSeats, 2000)
        }
    }


    render(){
        return(
            <div> 
            {/* Another option is mapping through every seat that we have an output the available seats*/}
                <div class="seat-container">
                    <div class="seat-row">
                        <div class="seat"> { this.props.seats } </div> {/* Within these two divs will be a display with available or Booked/the user name that it belongs to */}
                        <div class="seat"> {} </div> {/* Make these two divs inline block so they display left and right of eachother */}
                    </div> 
                    <div class="seat-row">
                        <div class="seat"> {} </div>
                        <div class="seat"> {} </div>
                    </div>
                    <div class="seat-row">
                        <div class="seat"> {} </div>
                        <div class="seat"> {} </div>
                    </div>
                    <div class="seat-row">
                        <div class="seat"> {} </div>
                        <div class="seat"> {} </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AvailableSeats 



