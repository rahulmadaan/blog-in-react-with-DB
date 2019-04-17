import React, { Component } from "react";
import "../Homepage.css";
import Post from "./Post.js";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(`/getPosts?userId=${this.props.userId}`)
      .then(res => res.json())
      .then(out => this.setState({ posts: out }));
  }
  render() {
    return (
      <div className="contents">
        <Post posts={this.state.posts} />
      </div>
    );
  }
}
export default Content;
