import React, { Component } from "react";
import Flights from "./components/Flight/Flights";
import Reservation from "./components/Reservation/Reservation";
import NavBar from "./components/navBar";



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      flight: []
    }

    this.searchFlight = this.searchFlight.bind(this)
  }

  searchFlight(origin, destination ){
    // 
  }

  render(){
      return (
      <div>
      {/*we can Change What is rendered in here, i was just getting components working*/}
          <h1>seniL riA gninruB</h1>
          <NavBar />
          <h3>Welcome (Users Name)</h3>
          <button>Login</button> {/* cliclking here renders the Flight Page ?/  we will need to learn conditional rendering */} 
          <Reservation />
        </div>   
      );
  }
}

export default App;
