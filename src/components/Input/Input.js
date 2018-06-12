import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	height: 40px;
	width: 400px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10px;
	font-size: 1.1em;
	border-radius: 5px;
	border: 1px solid gray;
	padding: 1%;
`;

class Input extends Component {
	render() {
		return <StyledInput placeholder="Input" />;
	}
}

export default Input;
