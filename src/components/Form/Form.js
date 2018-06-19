import React, { Component } from 'react';
import Button from './../Button/Button';
import Checkbox from './../Checkbox/Checkbox';
import Radio from './../Radio/Radio';
import Input from './../Input/Input';
import Dropdown from './../Dropdown/Dropdown';

class Form extends Component {
	render() {
		return (
			<div>
				<p>Form</p>

				<Checkbox />
				<Radio />
				<Input title={'Form placeholder'} />
				<Dropdown />
				<Button title={'Submit'} disabled={true} labeldisplay={'none'} />
			</div>
		);
	}
}

export default Form;
