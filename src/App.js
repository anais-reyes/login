import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/form" component={Form} />
				</Switch>
			</Router>
		);
	}
}

export default App;
