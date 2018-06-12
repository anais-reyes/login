import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<p>Dashboard component</p>
				<img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43c077.png" alt="unicorn" />
				<button>
					<Link to="/">Volver</Link>
				</button>
			</div>
		);
	}
}

export default Dashboard;
