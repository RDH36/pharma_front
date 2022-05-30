import React, { Component } from "react";
import { render } from "react-dom";

let latitude;
let longitude;
let concatlatitude;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    });
  }

  render() {
    return (
      <div>
        <p>latitude : {latitude} </p>
        <p>longitude : {longitude} </p>
      </div>
    );
  }
}

export default App;
