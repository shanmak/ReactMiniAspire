import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from '../src/Components/Home';
import Repay from '../src/Components/Repay';
import Login from '../src/Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div>          
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/repay" exact component={Repay} />
      </div>
    </Router>
    );
  }
}

export default App;
