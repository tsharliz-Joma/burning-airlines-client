import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import DisplayFlight from "../components/DisplayFlight";
// import AvailableSeats from "../components/AvailableSeats/AvailableSeats";


const Flight = (props) => {
  const [flight, setFlight] = useState(undefined);
  const { flightId } = useParams();
  const SERVER_URL = `http://localhost:3000/flights/${flightId}.json`;
  //checking if current user is passed down
  console.log("CURRENT USER ID: ", props.currentUser);

  useEffect(() => {
    axios(SERVER_URL).then((response) => {
      setFlight(response.data);
    });
  }, [SERVER_URL]);

  //checking for relevant flight object
  console.log("FLIGHT: ", flight);

  return (
    <div>
      <h1>Flight page with diagram coming soon</h1>
      <h2>Flight {flight.name}</h2>
      <ul>
        <li>Date: {flight.date}</li>
        <li>From: {flight.from}</li>
        <li>To: {flight.to}</li>
        <li>Plane: {flight.plane}</li>
      </ul>
    </div>
  );
};

export default Flight;
