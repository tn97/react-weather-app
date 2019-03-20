import React from "react";

export default class Forecastday extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { day, date } = this.props;
    return (
      <div className="forecastday-container">
        <div className="date">{date}</div>
        <div className="image">
          <img src={day.condition.icon} />
        </div>
        <div className="text">{day.avgtemp_f}°F / {day.avgtemp_c}°C</div>
        <div className="muted-text">{day.condition.text}</div>
      </div>
    )
  }
}