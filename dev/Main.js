import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
// const Login = () => <h1>Login</h1>;
import Login from './views/Login';
// const Register = () => <h1>Register</h1>;

class Main extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/login' component={(props) => <Login {...props} name='login' />} />
          <Route path='/register' component={(props) => <Login {...props} name='register' />} />
        </div>
      </Router>
    );
  };
};

export default Main;
