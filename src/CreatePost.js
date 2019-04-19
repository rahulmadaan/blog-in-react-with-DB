import React, { Component } from "react";
import "./createNewPost.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="new-post-header">
        <button>
          <Link to="/">Home </Link>
        </button>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div>
        Title
        <input
          type="text"
          className="new-post-title"
          onChange={this.props.getTitle}
        />
      </div>
    );
  }
}

class PostBody extends Component {
  render() {
    return (
      <textarea
        type="text"
        // value="Post"
        className="new-post-body"
        onChange={this.props.getBody}
      />
    );
  }
}
class PostFooter extends Component {
  render() {
    return (
      <div>
        Footer
        <input
          type="text"
          className="new-post-footer"
          onChange={this.props.getFooter}
        />
      </div>
    );
  }
}
class Submit extends Component {
  render() {
    return (
      <div>
        <button className="submit-btn" onClick={this.props.savePost}>
          <Link to="/">Publish Post</Link>
        </button>
      </div>
    );
  }
}
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      title: "",
      footer: ""
    };
  }
  getBody(ev) {
    this.setState({ body: ev.target.value });
  }

  getTitle(ev) {
    this.setState({ title: ev.target.value });
  }

  getFooter(ev) {
    this.setState({ footer: ev.target.value });
  }

  savePost() {
    fetch(`/addPost?userId=1`, {
      method: "post",
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        footer: this.state.footer
      })
    })
      .then(res => res.text())
      .then(out => console.log("out is", out));
  }
  render() {
    return (
      <div className="createNewPost">
        <Header />
        <div className="newPost">
          <Title getTitle={this.getTitle.bind(this)} />
          <PostBody getBody={this.getBody.bind(this)} />
          <PostFooter getFooter={this.getFooter.bind(this)} />
          <Submit savePost={this.savePost.bind(this)} />
        </div>
      </div>
    );
  }
}
export default CreatePost;
