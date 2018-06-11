import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
	render() {
		return (
			<div class="parent">
				<div class="container">
					<form>
						<input placeholder="User" type="text" />
						<input placeholder="Password" type="text" />
						<button type="button">
							<Link to="/dashboard">Login</Link>
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
