import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcom to My Book Store</h1>
        <p>You’re Only One Book Away From a Good Mood.</p>
      </Jumbotron>
    );
  }
}
