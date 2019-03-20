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
    this.setState({ locationName: e.target.value });
  }

  onSelectCity() {
    const { locationName } = this.state;
    const { eventEmitter } = this.props;
    this.setState({ isSelectLocationOpen: false });
    eventEmitter.emit("updateWeather", locationName);
  }

  closePopper() {
    this.setState({ isSelectLocationOpen: false });
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
                <button className="btn-close-popper" onClick={this.closePopper.bind(this)}> Close </button>
                <div className="form-container">
                <form>
                  <label htmlFor="location-name">Location Name</label>
                  <input type="submit" id="location-name" type="text" placeholder="City Name" onChange={this.onLocationNameChange.bind(this)} autoFocus/>
                  <button className="btn-select-location btn-popper" onClick={this.onSelectCity.bind(this)}>Select</button>
                  </form>
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