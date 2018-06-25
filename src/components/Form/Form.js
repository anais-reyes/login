import React, { Component } from 'react';
import Button from './../Button/Button';
import Checkbox from './../Checkbox/Checkbox';
import Radio from './../Radio/Radio';
import Input from './../Input/Input';
import Dropdown from './../Dropdown/Dropdown';
import { StyledContainer, StyledWrapper, ButtonWrapper } from './FormStyled';

class Form extends Component {
	render() {
		return (
			<StyledContainer>
				<h2>Form</h2>
				<Input title={'Username'} />
				<Input title={'Password'} />
				<Dropdown />
				<StyledWrapper>
					<Checkbox />
				</StyledWrapper>
				<StyledWrapper>
					<Radio />
				</StyledWrapper>
				<ButtonWrapper>
					<Button title={'Submit'} disabled={false} labeldisplay={'none'} />
				</ButtonWrapper>
			</StyledContainer>
		);
	}
}

export default Form;
