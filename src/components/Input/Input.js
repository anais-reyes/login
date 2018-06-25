import React, { Component } from 'react';
import { StyledInput, StyledLabel } from './InputSyled';

class Input extends Component {
	render() {
		const { title, disabled, labeldisplay } = this.props;
		return (
			<div id="input">
				<StyledInput onChange={this.props.handleChange} disabled={disabled} placeholder={title} type="text" />
				<StyledLabel style={{ display: labeldisplay }}>{title}</StyledLabel>
			</div>
		);
	}
}

Input.defaultProps = {
	disabled: false,
	title: 'Default Placeholder',
	labeldisplay: 'none',
};

export default Input;
