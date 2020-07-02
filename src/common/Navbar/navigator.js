import React from 'react';
import {Link} from 'react-router-dom';
import './navigator.css';

export default class Navigator extends React.Component {
    openNav = ()=>{
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("desktopMenu").style.display = "inherit";
   }
    closeNav = ()=>{
    document.getElementById("mySidenav").style.width = "0";
   }
    render() {
      return (
          <header className="App-header">
            <div className="logo">E-commerce</div>
            <div className="nav-icon1">
            <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <ul id="desktopMenu">
              <li><Link to={'/'} onClick={this.closeNav}>Home</Link></li>
              <li><Link to={'/Mens'} onClick={this.closeNav}>Mens</Link></li>
              <li><Link to={'/Womens'} onClick={this.closeNav}>Womens</Link></li>
              <li><Link to={'/Kids'} onClick={this.closeNav}>Kids</Link></li>
            </ul>
            </div>
            <span className="menubar" onClick={this.openNav}>&#9776;</span>
          </header>
      )
    }
  }