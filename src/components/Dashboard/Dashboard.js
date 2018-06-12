import React, { Component } from 'react';
import './Dashboard.css';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Dropdown from './../Dropdown/Dropdown';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<Dropdown />
				<Button />
				<Input />
			</div>
		);
	}
}

export default Dashboard;
