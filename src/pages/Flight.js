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
  console.log("CURRENT USER ID: ", props.currentUser);

  useEffect(() => {
    axios(FLIGHT_URL).then((response) => {
      setFlight(response.data);
    });
  }, [FLIGHT_URL]);

  //checking for relevant flight object
  console.log("FLIGHT: ", flight);

  return (
    <div>
      <h1>Flight {flight.name}</h1>
      <ul>
        <li>Date: {flight.date}</li>
        <li>
          {flight.from} to {flight.to}
        </li>
        <li>Plane: {flight.plane}</li>
      </ul>

      <SeatingDiagram
        userId={props.currentUser}
        flightId={flight.id}
        planeName={flight.plane}
      />
    </div>
  );
};

const SeatingDiagram = (props) => {
  const [plane, setPlane] = useState("");
  const [rows, setRows] = useState("");
  const [cols, setCols] = useState(""); // letters
  const PLANES_URL = `http://localhost:3000/airplanes.json`;

  useEffect(() => {
    console.log("HELP");
    axios(PLANES_URL).then((response) => {
      const allPlanes = response.data;
      const targetPlane = allPlanes.filter(
        (p) => p.name === props.planeName
      )[0];
      setPlane(targetPlane);
      setRows(targetPlane.rows);
      setCols(targetPlane.cols);
      console.log("TARGET PLANE:", targetPlane);
    });
  }, []);

  const numRows = [...Array(rows).keys()];
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const numCols = alphabet.slice(0, cols);

  const RESERVATION_URL = "http://localhost:3000/reservations"

  const makeReservation = (event) => {
    console.log("Current user ID:", props.userId);
    console.log("Flight ID:", props.flightId);
    console.log("Seat number:", event.target.dataset.value);
    const row = event.target.dataset.value.split(" ")[0];
    const col = event.target.dataset.value.split(" ")[1];
    console.log(row);
    console.log(col);

    axios.post(RESERVATION_URL, {
      reservation: {
        user_id: props.userId,
        flight_id: props.flightId,
        row: row,
        col: col
      }
    });
  };

  return (
    <div>
      <h2>Airplane {props.planeName}</h2>
      <table>
        {numRows.map((row) => (
          <tr>
            {numCols.map((col) => (
              <td
                data-value={`${row + 1} ${numCols.indexOf(col) + 1}`}
                onClick={makeReservation}
              >{`${row + 1}${col}`}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Flight;
