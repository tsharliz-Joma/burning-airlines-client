import React, { Component } from "react";
import Flights from "../pages/Flights";
import Reservation from "../pages/Reservation";
import NavBar from "./navBar";
import Airplanes from '../pages/Airplanes';



class App extends Component {
  render(){
      return (
      <div>
      {/*we can Change What is rendered in here, i was just getting components working*/}
          <h1>Burning Airlines</h1>
          <NavBar />
          <h3>Welcome ..... Users Name ?</h3>
          <button>Book Flight</button> {/* cliclking here renders the Flight Page ?/  we will need to learn conditional rendering */} 
          {/* <Reservation /> */}
          <Airplanes />
        </div>   
      );
  }
}

export default App;
