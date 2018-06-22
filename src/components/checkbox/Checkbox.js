import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
	font-size: 1em;
	margin: 5px;
`;

const StyledLabel = styled.label`
	margin: 10px 5px 5px 0;
`;

class Checkbox extends Component {
	render() {
		const { checked, disabled, title } = this.props;
		return (
			<div>
				<StyledCheckbox
					id={this.props.id}
					onChange={this.props.toggleChange}
					disabled={disabled}
					type="checkbox"
				/>
				<StyledLabel
					style={{
						display: this.props.labeldisplay,
						textDecoration: this.props.checked === false ? 'none' : 'underline',
					}}
				>
					{title}
				</StyledLabel>
			</div>
		);
	}
}

Checkbox.defaultProps = {
	checked: false,
	title: 'Default Checkbox',
	labeldisplay: 'inline-block',
	disabled: false,
	text: 'none',
};

export default Checkbox;
