import React, { Component } from 'react';
import Web3 from 'web3'
import logo from '../logo.png';
import './App.css';
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar'
import Main from './Main'
import Header from "./Header"
import Navigator from "./Navigator"
import Home from "./Home"

// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => (
  <div>
   {/* <Header /> */}
    <Navigator/>
  </div>
)

export default App
