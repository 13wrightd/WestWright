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

      <div style={{height:'30vh'}} className='container'>
        <div className='row'>
          <div className='col s3 '>
            <div className='card light-blue lighten-3'>
              supsup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>

            </div>
          </div>
          <div className='col s9'>
            <div className='card'>
            
         
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
              sup<br/>
          

            </div>
          </div>
        </div>
      </div>       
    );
  }
}

export default Nav;
