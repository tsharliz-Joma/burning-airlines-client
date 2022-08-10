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
        <h1>ADMIN: Create a new airplane</h1>
        <AirplaneForm onSubmit={this.saveAirplane} />
        <AirplanesList airplanes={this.state.airplanes} />
      </div>
    );
  }
}

const AirplaneForm = (props) => {
  const [content, setContent] = useState("");

<<<<<<< HEAD
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
        setContent('');
        console.log("Hey, I work");
    };
=======
  const _handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(content);
    console.log(content);
    console.log(content.name);
    setContent("");
  };
>>>>>>> be9e0a3e8f5c18cf3a11525a81ef3f3117e7f525

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
      <input type="submit" value="Create Airplane" />
    </form>
  );
};

const AirplanesList = (props) => {
  return (
    <div>
      <p>{props.airplanes.length} All Airplanes: </p>
      {props.airplanes.map((s) => (
        <p key={s.id}>{s.content}</p>
      ))}
    </div>
  );
};

export default Airplanes;
