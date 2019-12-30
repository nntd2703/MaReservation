import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div> Home Page </div>
        <Link to="/reservation">About</Link>
      </div>
    );
  }
}

export default Home;
