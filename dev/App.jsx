import React, { Component } from 'react';
import Nav from './components/Nav.jsx';
import Chat from './components/Chat.jsx';
import Footer from './components/Footer.jsx';
import TestModule from './components/TestModule'


class App extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state={count:1};

  }
  incCount(){

    this.setState({count:this.state.count+1});
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        
        <Nav />
        <TestModule />
        <Chat />

      </div>
    );
  }
}

export default App;
