import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
	font-size: 1em;
	margin: 5px;
`;

const StyledLabel = styled.label`
	margin: 10px 5px 5px 0;
`;

// export default function Checkbox({ checkbox: { checked, disabled, title } }) {
// 	return (
// 		<div>
// 			<StyledCheckbox disabled={disabled} type="checkbox" />
// 			<StyledLabel>{title}</StyledLabel>
// 		</div>
// 	);
// }

class Checkbox extends Component {
	render() {
		const { checked, disabled, title } = this.props;
		return (
			<div>
				<StyledCheckbox disabled={disabled} type="checkbox" />
				<StyledLabel>{title}</StyledLabel>
			</div>
		);
	}
}

Checkbox.defaultProps = {
	checked: false,
	title: 'Default Checkbox',
	disabled: false,
};

export default Checkbox;
