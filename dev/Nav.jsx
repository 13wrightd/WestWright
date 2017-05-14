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
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>           
    );
  }
}

export default Nav;
