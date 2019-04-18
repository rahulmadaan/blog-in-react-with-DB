import React, { Component } from "react";
import "../Homepage.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Body userId={this.state.userId} />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
