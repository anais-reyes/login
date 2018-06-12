import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background: #a8a8a8;
	height: 60px;
	width: 200px;
	color: white;
	border-radius: 50px;
	font-size: 1.3em;
	margin-top: 150px;
`;

class Button extends Component {
	render() {
		return <StyledButton>Button</StyledButton>;
	}
}

export default Button;
