import React, { Component } from 'react';

class TestModule extends Component {
  constructor() {
    super();

    this.state = { data: {} }
  }

  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { f_name, l_name } = this.state.data

    return (
      <div>
        <p>
          Data from server: {f_name} {l_name}
        </p>
      </div>
    );
  }
}

export default TestModule;
