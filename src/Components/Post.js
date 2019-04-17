import React, { Component } from "react";
import "../Homepage.css";

class Post extends Component {
  createPosts(posts) {
    return posts.map(post => {
      return (
        <div className="post" id="post2">
          <div className="post-header"> {post.postHeader}</div>
          <div className="post-body"> {post.postBody}</div>
          <div className="post-footer">{post.postFooter}</div>
        </div>
      );
    });
  }
  render() {
    return this.createPosts(this.props.posts);
  }
}
export default Post;
