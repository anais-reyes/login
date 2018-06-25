import React, { Component } from 'react';
import { StyledCheckbox, StyledLabel } from './CheckboxStyled';

class Checkbox extends Component {
	render() {
		const { checked, disabled, title } = this.props;
		return (
			<div id="checkbox">
				<StyledCheckbox
					id={this.props.id}
					onChange={this.props.toggleChange}
					disabled={disabled}
					type="checkbox"
					checked={this.props.checked}
				/>
				<StyledLabel
					style={{
						display: this.props.labeldisplay,
						textDecoration: this.props.checked === false ? 'none' : 'line-through',
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
};

export default Checkbox;
