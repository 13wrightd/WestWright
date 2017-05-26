import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGroup from './InputGroup';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO figure out how to get username and password values
      username: '',
      password: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _onSubmit(e) {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.submit(data);
  };

  _handleChange(name, value) {
    switch(name) {
      case 'username': {
        this.setState({ username: value });
        break;
      };
      case 'password': {
        this.setState({ password: value });
        break;
      };
    };
  };

  render() {
    return (
      <form className='card col s6 offset-s3' onSubmit={this._onSubmit}>
        <div className='row'>
          <h4>{ this.props.title }</h4>
        </div>
        <div className='row'>
          <InputGroup name='username' handleChange={this._handleChange} />
          <InputGroup name='password' type='password' handleChange={this._handleChange} />
        </div>
        <div className='row'>
          <a className='waves-effect waves-light btn' onClick={this._onSubmit}>Submit</a>
        </div>
      </form>
    );
  };
};

LoginForm.propTypes = {
  title: PropTypes.string
};

export default LoginForm;
