import React from "react";


export default class Store extends React.Component {

  constructor(props) {
    super(props);

    // Main application state
    this.state = {
      appName: "Whether Weather"
    }
  }

  render() {

    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { ...this.state});
    });
  }
}