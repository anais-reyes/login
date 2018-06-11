import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		);
	}
}

export default App;
