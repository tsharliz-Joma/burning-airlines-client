import React, { Component, useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/PLACEHOLDER.json'; // IMPORTANT - CHANGE TO AIRPLANES URL PAGE FROM RAILS

class Airplanes extends Component {
    constructor() {
        super();
        this.state = {
            airplanes: []
        };

        this.saveAirplane = this.saveAirplane.bind(this);
    }

    
    componentDidMount() { //        REFRESHES THE PAGE WITH POLLING WITH UPDATES AIRPLANES DATA
        const fetchAirplanes = () => {
            axios(SERVER_URL).then((response) => {
                this.setState({airplanes: response.data});
            });
            setTimeout(fetchAirplanes, 9000);
        };

        fetchAirplanes();
    }

    saveAirplane(content) {
        axios.post(SERVER_URL, { content: content }).then((response) => {
            this.setState({airplanes: [response.data, ...this.state.airplanes]})
        });
    }

    render() {
        return (
            <div>
                <h1>ADMIN: Create a new airplane</h1>
                <AirplaneForm onSubmit={ this.saveAirplane } />
                <AirplanesList airplanes={ this.state.airplanes } />
            </div>
        );
    }
}

const AirplaneForm = (props) => {
    const [content, setContent] = useState('');

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
        setContent('');
    };

    const _handleChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onChange={ _handleChange } value={ content } required></textarea>
            <input type="submit" value="Tell" />
        </form>
    );
};

const AirplanesList = (props) => {
    return (
        <div>
            <p>{ props.airplanes.length } All Airplanes: </p>
            { props.airplanes.map((s) => <p key={ s.id }>{ s.content }</p>) }
        </div>
    );
}

export default Airplanes;