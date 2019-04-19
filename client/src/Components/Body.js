import React, { Component } from "react";

import SideBar from "./SideBar.js";
import Content from "./Content.js";
import "../Homepage.css";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Content userId={this.props.userId} />{" "}
        <SideBar userId={this.props.userId} />
      </div>
    );
  }
}
export default Body;
