import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
	height: 50px;
	background-color: #a9a9a9;
	color: red;
`;

const StyledP = styled.p`
	font-size: 1.1em;
	color: purple;
	margin-top: 0px;
	padding-top: 15px;
	text-align: left;
	margin-left: 10px;
	cursor: pointer;
	margin-bottom: 15px;
`;

const StyledList = styled.ul`
	margin: 0;
	padding-left: 0;
`;

const StyledListItem = styled.li`
	list-style-type: none;
	color: green;
	cursor: pointer;
	margin: 0;
	padding: 10px 10px 10px 30px;
	background-color: #a9a9a9;
	width: 20%;
	border-bottom: 1px solid white;
`;

class Dropdown extends Component {
	constructor() {
		super();
		this.state = { isOpen: false };
	}
	handleClick = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		let dropdown;
		this.state.isOpen
			? (dropdown = (
					<StyledNav>
						<StyledP onClick={this.handleClick}>Ejercicios</StyledP>
						<StyledList>
							<StyledListItem>
								<Link to="/form">Form</Link>
							</StyledListItem>
						</StyledList>
					</StyledNav>
			  ))
			: (dropdown = (
					<StyledNav>
						<StyledP onClick={this.handleClick}>Ejercicios</StyledP>
					</StyledNav>
			  ));

		return <div>{dropdown}</div>;
	}
}

export default Dropdown;
