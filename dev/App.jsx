import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Chat from './Chat.jsx';
import Footer from './Footer.jsx';


class App extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state={count:5};
    
  }
  incCount(){
    
    this.setState({count:this.state.count+1});
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <Nav />    
        <main>   
          <Chat />
        </main>
     
      </div>
    );
  }
}

export default App;
