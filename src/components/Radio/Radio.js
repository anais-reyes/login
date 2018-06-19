import React, { Component } from 'react';
import styled from 'styled-components';

const StyledRadio = styled.input`
	font-size: 1em;
	margin: 5px;
`;
const StyledLabel = styled.label`
	margin: 10px 5px 5px 0;
`;

class Radio extends Component {
	render() {
		const { checked, disabled, title } = this.props;
		return (
			<div>
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
