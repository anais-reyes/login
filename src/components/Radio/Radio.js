import React, { Component } from 'react';
import styled from 'styled-components';

const StyledRadio = styled.input`
	font-size: 1em;
	margin: 5px;
`;
const StyledLabel = styled.label`
	margin: 10px 5px 5px 0;
`;

export default function Radio({ radio: { checked, disabled, title } }) {
	return (
		<div>
			<StyledRadio type="radio" disabled={disabled} />
			<StyledLabel>{title}</StyledLabel>
		</div>
	);
}
