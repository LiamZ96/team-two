import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import subreddit from './subreddit';
import user from './user';
import home from './home';
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
		<HashRouter>
		  <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to Team 2s Class project</h1>
			  
			</header>
			
			<ul className="header">
				<li><NavLink exact to="/" class = "links">Home</NavLink></li>
				<li><NavLink to="/subreddit" class = "links">Subreddit</NavLink></li>
				<li><NavLink to="/user" class = "links">User</NavLink></li>
			</ul>
			<div className="content">
            <Route exact path="/" component={home}/>
            <Route path="/subreddit" component={subreddit}/>
            <Route path="/user" component={user}/>
          </div>
		  </div>
		</HashRouter>
    );
  }
}

export default App;
