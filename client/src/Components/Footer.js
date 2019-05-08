import React, { Component } from "react";
import "../stylesheets/Footer.css";

class Input extends Component {
  render() {
    return <input type="text" placeholder={this.props.placeholder} />;
  }
}
class Button extends Component {
  render() {
    return <button className="newsletter-join-btn">{this.props.text}</button>;
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="join-newsletter">
          <label>Join our newsletters</label>
          <Input placeholder="Enter your Email" />
          <Button text="Join" />
        </div>
        <label className="label-powered">powered by wordvoid</label>
      </div>
    );
  }
}
export default Footer;
