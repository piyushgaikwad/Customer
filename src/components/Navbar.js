import React, { Component } from 'react';

import Home from "./Home";
import App from "./App";
import { Link } from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Route, 
//   Link, 
// } from "react-router-dom";
class Navbar extends Component {

  render() {
    return (
      
      <nav bg="primary" variant="dark"
      className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-1.5 shadow">
        <div
          className="navbar-brand bg-info col-sm-3 col-md-2 mr-0"
         
          target="_blank"
          rel="noopener noreferrer"
        >
         Buyer|| Seller
        </div>
  
        
        {/* <ul className="navbar-nav px-3">
        <small class=" font-weight-bold"  style={{color:"white",fontWeight:"bold",backgroundColor:"#5bc0de", padding:"10px"}}>
        HOME
        </small>
        </ul> */}
        
        {/* <ul className="navbar-nav px-3">
        <small class=" font-weight-bold"  style={{color:"white",fontWeight:"bold",backgroundColor:"#5bc0de", padding:"10px"}}>HOW TO USE</small>
        </ul> */}
       
        {/* /* <ul style={{listStyleType:"none",textAlign:"center"}}>
         
      <li style={{listStyleType:"none",textAlign:"center"}}><Link to='/'>HOME</Link></li>
        </ul> */ }
        <ul className="navbar-nav px-3">
         
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small class="text-info font-weight-bold"  style={{color:"white",fontWeight:"bold"}}>User Account Number</small>
          <small className="text-white "> <span class="text-info" id="account">{this.props.account}</span></small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
