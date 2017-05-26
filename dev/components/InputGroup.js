import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };
  };

  _handleChange(e) {
    const { value } = e.target;
    this.setState({ data: value });
    this.props.handleChange(this.props.name, value);
  };

  render() {
    const { name, type } = this.props;

    return (
      <div className='input-field col s12'>
        <input type={type} value={this.state.data} onChange={this._handleChange.bind(this)} className='validate' />
        <label htmlFor={name}>{ name }</label>
      </div>
    );
  };
};

InputGroup.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
