import React, { Component } from 'react';
import { StyledButton, StyledLabel, inlineDiv } from './ButtonStyled';

class Button extends Component {
	render() {
		const { title, disabled, labeldisplay } = this.props;

		return (
			<inlineDiv id="button">
				<StyledButton
					onClick={this.props.onClick}
					style={{ backgroundColor: disabled === true ? 'grey' : 'darkblue' }}
					disabled={disabled}
					id={this.props.id}
				>
					{title}
				</StyledButton>
				<StyledLabel style={{ display: labeldisplay }}>{title}</StyledLabel>
			</inlineDiv>
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
