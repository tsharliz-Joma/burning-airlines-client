import React, { Component, useState } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/airplanes.json"; // IMPORTANT - CHANGE TO AIRPLANES URL PAGE FROM RAILS

class Airplanes extends Component {
  constructor() {
    super();
    this.state = {
      airplanes: [],
    };

    this.saveAirplane = this.saveAirplane.bind(this);
  }

  componentDidMount() {
    //        REFRESHES THE PAGE WITH POLLING WITH UPDATES AIRPLANES DATA
    const fetchAirplanes = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ airplanes: response.data });
      });
      setTimeout(fetchAirplanes, 9000);
    };

    fetchAirplanes();
  }

  saveAirplane(content) {
    //         SAVES AIRPLANE DATA TO THE DATABASE
    axios.post(SERVER_URL, { 
        airplane: {
            name: content.name,
            rows: content.rows,
            cols: content.columns
    } }).then((response) => {
      this.setState({ airplanes: [response.data, ...this.state.airplanes] });
    });
  }

  render() {
    return (
      <div>
        <h1>ADMIN: Commission a new airplane for service</h1>
        <AirplaneForm onSubmit={this.saveAirplane} />
        <AirplanesList airplanes={this.state.airplanes} />
      </div>
    );
  }
}

const AirplaneForm = (props) => {
  const [content, setContent] = useState("");

  const _handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(content);
    setContent("");
  };

  const _handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContent((values) => ({ ...values, [name]: value }));
  };

  return (
    <form onSubmit={_handleSubmit}>
      <input
        onChange={_handleChange}
        name="name"
        type="text"
        placeholder="name"
        required
      />
      <input
        onChange={_handleChange}
        name="rows"
        type="integer"
        placeholder="rows"
        required
      />
      <input
        onChange={_handleChange}
        name="columns"
        type="integer"
        placeholder="columns"
        required
      />
      <input type="submit" value="Commission Airplane!" />
    </form>
  );
};


const AirplanesList = (props) => {
  return (
    <div>
      <h3>There are {props.airplanes.length} total airworthy airplanes, ready for service! </h3>


      {props.airplanes.map((a) => (
        <p> Plane Model: { a.name } Total seats: {a.cols * a.rows} Total columns: {a.cols} Rows: {a.rows} <br></br></p>
        
      ))}
    </div>
  );
};

export default Airplanes;