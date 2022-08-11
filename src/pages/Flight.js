import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import DisplayFlight from "../components/DisplayFlight";
// import AvailableSeats from "../components/AvailableSeats/AvailableSeats";

const Flight = (props) => {
  const [flight, setFlight] = useState("");
  const { flightId } = useParams();
  const FLIGHT_URL = `http://localhost:3000/flights/${flightId}.json`;
  //checking if current user is passed down
  //console.log("CURRENT USER ID: ", props.currentUser);

  useEffect(() => {
    axios(FLIGHT_URL).then((response) => {
      setFlight(response.data);
    });
  }, [FLIGHT_URL]);

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

      <SeatingDiagram plane={flight.plane} />
    </div>
  );
};

const SeatingDiagram = (props) => {
  const [plane, setPlane] = useState("");
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0); // letters

  useEffect(() => {
    const PLANES_URL = `http://localhost:3000/airplanes.json`;
    axios(PLANES_URL).then((response) => {
      const allPlanes = response.data;
      const targetPlane = allPlanes.filter(p => p.name === props.plane)[0];
      setPlane(targetPlane);
      setRows(targetPlane.rows);
      setCols(targetPlane.cols);
    });
  }, [plane]);

  return (
    <div>
      <h2>Airplane {plane.name}</h2>
      <FuckingTable rows={rows} cols={cols} />
    </div>
  );
};

const FuckingTable = (props) => {
  return (
    <table>
      <FuckingRows rows={props.rows}/>
    </table>
  );
};

const FuckingRows = (props) => {
  return (
    <div>
    </div>
  );
}

export default Flight;
