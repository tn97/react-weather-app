import React from "react";
import "./style.scss";
import Forecastday from "./forecastday";

export default class BottomSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { forecastdays } = this.props;

    return (
      <div className="bottom-container">
        <div className="inner-container">
          {forecastdays && forecastdays.map((day, date, idx) => {
            return <Forecastday day={day.day} date={day.date} key={idx} /> // only begin looping (map) if forecastdays is available.
          })}
        </div>
      </div>
    );
  }
}