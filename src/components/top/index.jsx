import React from "react";
import "./style.scss";
import Weather from "./weather";
import { Manager, Reference, Popper } from "react-popper";

export default class TopSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false,
    };
  }

  onToggleSelectLocation() {
    this.setState((prevState) => ({ isSelectLocationOpen: !prevState.isSelectLocationOpen }))
  }

  onLocationNameChange(e) {
    this.setState({ locationName: e.target.value })
  }

  onSelectCity() {
    const { locationName } = this.state;
    const { eventEmitter } = this.props;

    eventEmitter.emit("updateWeather", locationName);
  }

  render() {
    const { isSelectLocationOpen } = this.state;
    const { eventEmitter } = this.props;

    return (
      <div className="top-container">

        <div className="title">Whether Weather</div>
        <Weather {...this.props} />

        <Manager>
          <Reference>
            {({ ref }) => (
              <button className="btn btn-select-location" ref={ref} onClick={this.onToggleSelectLocation.bind(this)}>
                Select Location
              </button>
            )}
          </Reference>
          <Popper placement="top">
            {({ ref, style, placement, arrowProps }) => (isSelectLocationOpen && //isSelectLocationOpen && basically is a flag. If isSelectLocation is true then the popper will render, otherwise, if it is false, then it won't.
              <div className="popup-container" ref={ref} style={style} data-placement={placement}>
                <div className="form-container">
                  <label htmlFor="location-name">Location Name</label>
                  <input id="location-name" type="text" placeholder="City Name" onChange={this.onLocationNameChange.bind(this)} />
                  <button className="btn-select-location btn-popper" onClick={this.onSelectCity.bind(this)}>Select</button>
                </div>
                <div ref={arrowProps.ref} style={arrowProps.style} />
              </div>
            )}
          </Popper>
        </Manager>
      </div>
    );
  }
}