import React, { Component } from "react";
import "../stylesheets/Homepage.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: []
    };
  }
  componentDidMount() {
    fetch(`/getPostHeaders?userId=${this.props.userId}`)
      .then(res => res.json())
      .then(out => this.setState({ headers: out }));
  }
  generateHeadings() {
    return this.state.headers.map(header => {
      return <li>{header.postHeader}</li>;
    });
  }
  getHeadings() {
    return <ul>{this.generateHeadings()}</ul>;
  }

  render() {
    return (
      <div className="side-bar">
        <div className="Recent-posts">{this.getHeadings()}</div>
      </div>
    );
  }
}
export default SideBar;
