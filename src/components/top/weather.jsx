import React from "react";
import SunImg from "../../resources/images/weather_sun.png";

export default class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {

    const { location, temp_f, temp_c, isDay, text, iconURL } = this.props;

    return (
      <div className="weather-container">
        <div className="header">{ location }</div>

        <div className="inner-container">
          <div className="image">
          <img src={iconURL}/>
          </div>

          <div className="current-temperature">{ temp_f }°F / { temp_c }°C</div>
        </div>
        <div className="footer">{ text }</div>
      </div>
    );
  }
}