import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Homepage.css";

class Post extends Component {
  createPosts(posts) {
    return posts.map(post => {
      return (
        <div className="post" id={post.postId} onClick={this.props.viewPost}>
        <Link to="/viewPost">
            <div className="post-header" id={post.postId}>
              {post.postHeader}
            </div>
            <div className="post-body" id={post.postId}>
              {post.postBody}
            </div>
            <div className="post-footer" id={post.postId}>
              {post.postFooter}
            </div>
        </Link>
          </div>
      );
    });
  }
  render() {
    return this.createPosts(this.props.posts);
  }
}
export default Post;
