import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background: darkblue;
	color: white;
	width: 150px;
	height: 40px;
	font-size: 1em;
	border-radius: 5px;
	display: block;
	margin: 5px;
`;

const StyledLabel = styled.label`
	margin: 5px;
`;

class Button extends Component {
	render() {
		const { title, disabled, labeldisplay } = this.props;

		return (
			<div>
				<div className="title">
					<StyledButton
						onClick={this.props.handleClick}
						style={{ backgroundColor: disabled === true ? 'grey' : 'darkblue' }}
						disabled={disabled}
						id={this.props.id}
					>
						{title}
					</StyledButton>
					<StyledLabel style={{ display: labeldisplay }}>{title}</StyledLabel>
				</div>
			</div>
		);
	}
}

Button.defaultProps = {
	id: '',
	title: 'Button Default',
	disabled: false,
	labeldisplay: 'none',
};

export default Button;

//COMMENT
