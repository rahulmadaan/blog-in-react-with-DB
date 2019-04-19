import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      confirmPassword: ""
    };
  }

  validatePassword() {
    return this.state.password === this.state.confirmPassword;
  }

  insertDataToDB(state) {
    fetch("/addUser", {
      method: "POST",
      body: JSON.stringify({
        userName: state.userName,
        password: state.password
      })
    })
      .then(res => res.text())
      .then(out => console.log("user added ", out));
  }

  submit(ev) {
    ev.preventDefault();
    if (this.validatePassword()) {
      this.insertDataToDB(this.state);
    }
  }

  getUserName(ev) {
    this.setState({ userName: ev.target.value });
  }

  getPassword(ev) {
    this.setState({ password: ev.target.value });
  }

  getConfirmPassword(ev) {
    this.setState({ confirmPassword: ev.target.value });
  }

  render() {
    return (
      <div className="sign-up-form">
        <form onSubmit={this.props.submit}>
          Enter UserName:
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={this.getUserName.bind(this)}
          />
          Enter Password:
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.getPassword.bind(this)}
          />
          Enter password again:
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={this.getConfirmPassword.bind(this)}
          />
          <input
            type="submit"
            value="submit"
            onClick={this.submit.bind(this)}
          />
        </form>
      </div>
    );
  }
}
export default Login;
