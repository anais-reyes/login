import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	border: 1px solid grey;
	color: grey;
	width: 400px;
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

class Input extends Component {
	render() {
		const { title, disabled, labeldisplay } = this.props;
		return (
			<div>
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
