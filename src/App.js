import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Nav from'./Nav.js';
import Footer from './Footer.js';
import Menu from './Menu.js';

class App extends React.Component{
  constructor(){
    super();
   
  }
    
  render(){
    return (
      <div>
        <Nav/>
        <Menu/>
        <Footer/>
      </div>
    )
  }
}

export default App

ReactDOM.render(<App />, document.getElementById("root"));