import React, { Component } from "react";
import Flights from "./Flight/Flights";
import Reservation from "./Reservation/Reservation";



class App extends Component {
  render(){
      return (
      <div>
          <h1>seniL riA gninruB</h1>
          <Flights />
          <Reservation />
        </div>   
      );
  }
}

export default App;
