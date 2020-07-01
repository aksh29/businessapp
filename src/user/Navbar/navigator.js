import React from 'react';
import { BrowserRouter as Router, Route , Link , Switch} from 'react-router-dom';
import Home from '.././Home/home';
import Men from '.././Mens/mens';
import Women from '.././Womens/womens';
import Kid from '.././Kids/kids';
import './navigator.css';



export default class Navigator extends React.Component {
   openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("desktopMenu").style.display = "inherit";
   }
   closeNav(){
    document.getElementById("mySidenav").style.width = "0";
   }
    render() {
      return (
        <Router>
          <React.Fragment>
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
          <div>
            <Switch>  
            <Route path='/Mens' component={Men}/>
            <Route path='/Womens' component={Women}/>
            <Route path='/Kids' component={Kid}/>
            <Route exactpath='/' component={Home}/>
            </Switch>
          </div>
          </React.Fragment>
        </Router>
      
      
      
      )
    }
  }