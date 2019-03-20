import React from "react";
import SunImg from "../../resources/images/weather_sun.png";

export default class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="weather-container">
        <div className="header">Location name</div>

        <div className="inner-container">
          <div className="image">
          <img src={SunImg}/>
          </div>

          <div className="current-temperature">10°</div>
        </div>
        <div className="footer">Sunny</div>
      </div>
    );
  }
}