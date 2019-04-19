import React, { Component } from "react";
import Homepage from "./Components/Homepage.js";
import CreatePost from "./CreatePost.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/newPost" component={CreatePost} />
      </Router>
    );
  }
}
export default App;
