import React, { Component } from "react";
import NavBar from "./navBar";
import SearchBar from "../pages/Search";



class App extends Component {
  render(){
      return (
      <div>
      {/*we can Change What is rendered in here, i was just getting components working*/}
          <h1>Burning Airlines</h1>
          <NavBar />
          <SearchBar />
          <h3>Welcome ..... Users Name ?</h3>
          <button>Book Flight</button> {/* cliclking here renders the Flight Page ?/  we will need to learn conditional rendering */} 
          {/* <Reservation /> */}
          <Airplanes />
        </div>   
      );
  }
}

export default App;
