import React, { Component } from "react";

import SideBar from "./SideBar.js";
import Content from "./Content.js";
import "../stylesheets/Homepage.css";

class Body extends Component {
  viewPost(ev) {
    fetch()
  }
  render() {
    return (
      <div className="body">
        <Content userId={this.props.userId} viewPost={this.viewPost} />{" "}
        <SideBar userId={this.props.userId} />
      </div>
    );
  }
}
export default Body;
