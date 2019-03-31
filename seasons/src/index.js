import React from "react";
import ReactDOM from "react-dom";

// class based component
class App extends React.Component {
  constructor(props) {
    super(props);
    // this is the ONLY time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };
  }

  // Always keep data loading material in componentDidMount(), not in constructor
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render! (conditional rendering)
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
