import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <div className="left-section-header">
            <div className="newPost-btn">
              <Link to="/newPost">Create New Post </Link>
            </div>
          </div>
          <div className="right-section-header">
            <div className="login-btn">Login</div>
            <div className="signup-btn">Signup</div>
            <div className="search-btn">Search</div>
          </div>
        </div>
      </Router>
    );
  }
}
export default Header;
