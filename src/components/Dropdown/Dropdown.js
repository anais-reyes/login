import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
	height: 40px;
	color: grey;
	border: 1px solid grey;
	font-size: 1em;
	width: 400px;
	margin: 10px 0;
`;

const StyledLabel = styled.label`
	margin: 5px;
	display: block;
`;

class Dropdown extends Component {
	render() {
		const { labeldisplay, disabled, title, option1, option2 } = this.props;
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
}

Dropdown.defaultProps = {
	disabled: false,
	title: 'Default Dropdown',
	option1: 'Default Test 1',
	option2: 'Default Test 2',
	labeldisplay: 'none',
};

export default Dropdown;
