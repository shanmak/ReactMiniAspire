import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';


export default class Header extends Component {

  render() {

    return (
      <div className="customnav">
        <nav className="nav nav-tabs navbar-dark bg-light justify-content-center">   
        <NavLink to="/home" className="nav-link  col-4">HOME</NavLink>
        <NavLink className="nav-link col-4" to="/repay">REPAYMENT</NavLink> 
         <NavLink className="nav-link col-4"  to="/">LOGOUT</NavLink> 
        </nav>
      </div>
    )
  }
}