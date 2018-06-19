import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<p>Dashboard</p>
				<button>
					<Link to="/form">Primer ejercicio</Link>
				</button>
			</div>
		);
	}
}

export default Dashboard;
