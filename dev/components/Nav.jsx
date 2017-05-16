import React, { Component } from 'react';
// import css from  'materialize-css'

class Nav extends Component {
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
      <nav >
        <div className="nav-wrapper light-blue">
          <a href="#" className="brand-logo">WestWright</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">about</a></li>
            <li><a href="badges.html">components</a></li>
            <li><a href="collapsible.html">settings</a></li>
          </ul>
        </div>
      </nav>           
    );
  }
}

export default Nav;
