import React, { Component } from 'react';
import { StyledLabel, StyledSelect } from './DropdownStyled';

class Dropdown extends Component {
	render() {
		const { labeldisplay, disabled, title, option1, option2 } = this.props;
		return (
			<div id="dropdown">
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
