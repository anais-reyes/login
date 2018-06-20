import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			user: '',
			password: '',
			redirect: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}
	handleClick() {
		if (this.state.user === 'hola' && this.state.password === 'hola') {
			this.setState({ redirect: true });
		}
	}

	render() {
		const redirect = this.state.redirect;
		if (redirect) {
			return <Redirect to="/dashboard" />;
		} else {
			return (
				<div className="parent">
					<div className="container">
						<form>
							<input
								className="login"
								id="user"
								onChange={this.handleChange}
								placeholder="User"
								type="text"
							/>
							<input
								className="login"
								id="password"
								onChange={this.handleChange}
								placeholder="Password"
								type="text"
							/>
							<button type="button" onClick={this.handleClick} to="/dashboard">
								Login
							</button>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default Login;
// Coment
