import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return <Col xs={12}>{this.props.children}</Col>;
  }
}

export default App;
