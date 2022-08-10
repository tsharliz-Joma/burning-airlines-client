import React from "react";
import { useParams } from "react-router-dom";
// import Flights from "./Flights";
// import DisplayFlight from "../components/DisplayFlight";
// import AvailableSeats from "../components/AvailableSeats/AvailableSeats";

const Flight = (props) => {
  const { flightId } = useParams();
  //checking if current user is passed down
  console.log("awawa", props.currentUser);

  return (
    <div>
      <h1>Flight page with diagram coming soon</h1>
      <h2>Flight ID#{flightId}</h2>
    </div>
  );
};

export default Flight;
