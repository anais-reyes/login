import React, { Component } from 'react';
import Button from './../Button/Button';
import Checkbox from './../Checkbox/Checkbox';
import Radio from './../Radio/Radio';
import Input from './../Input/Input';
import Dropdown from './../Dropdown/Dropdown';
import styled from 'styled-components';

const StyledContainer = styled.div`
	border: 1px solid grey;
	max-width: 450px;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
`;

const StyledWrapper = styled.div`
	text-align: left;
	margin: 10px 5%;
`;

const ButtonWrapper = styled.div`
	display: inline-block;
	text-align: center;
	margin-bottom: 15px;
`;

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
