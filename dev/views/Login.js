import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    };

    this._onSubmit = this._onSubmit.bind(this);
  };

  _onSubmit(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const formData = JSON.stringify({
      username: data.username,
      password: data.password
    });

    const options = {
      method: 'POST',
      body: formData,
      headers: headers
    };

    fetch('/user/register', options)
      .then(res => res.json())
      .then(data => this.setState({ user: data.username }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='row'>
        <div className='row'>
          <LoginForm title={this.props.name.toUpperCase()} submit={this._onSubmit} />
        </div>
        <div className='row'>
          <pre>{this.state.user}</pre>
        </div>
      </div>
    );
  };
};

export default Login;
