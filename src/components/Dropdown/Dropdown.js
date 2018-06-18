import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
	height: 40px;
	color: grey;
	border: 1px solid grey;
	font-size: 1em;
`;

const StyledLabel = styled.label`
	margin: 5px;
	display: block;
`;

export default function Dropdown({ dropdown: { labeldisplay, disabled, title, option1, option2 } }) {
	return (
		<div>
			<StyledSelect disabled={disabled}>
				<option>{option1}</option>
				<option>{option2}</option>
			</StyledSelect>
			<StyledLabel style={{ display: labeldisplay }}>{title}</StyledLabel>
		</div>
	);
}

//Coment
