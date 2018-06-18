import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	border: 1px solid grey;
	color: grey;
	width: 250px;
	height: 40px;
	font-size: 1em;
	border-radius: 5px;
	margin: 5px;
	padding: 5px;
`;

const StyledLabel = styled.label`
	margin: 5px;
	display: block;
`;

export default function Input({ input: { title, disabled, labeldisplay } }) {
	return (
		<div>
			<StyledInput disabled={disabled} placeholder={title} type="text" />
			<StyledLabel style={{ display: labeldisplay }}>{title}</StyledLabel>
		</div>
	);
}
