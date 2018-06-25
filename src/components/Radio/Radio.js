import React, { Component } from 'react';
import { StyledLabel, StyledRadio } from './RadioStyled';

class Radio extends Component {
	constructor() {
		super();
		count: 0;
	}
	render() {
		const { checked, disabled, title } = this.props;
		return (
			<div id="radio">
				<StyledRadio type="radio" disabled={disabled} />
				<StyledLabel>{title}</StyledLabel>
			</div>
		);
	}
}

Radio.defaultProps = {
	title: 'Default Radio',
	disabled: false,
	checked: false,
};

export default Radio;
