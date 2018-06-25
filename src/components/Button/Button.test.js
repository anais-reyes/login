import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('Component <Button /> exists with props', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Button title="Button Default" disabled={false} labeldisplay="none" />);
	});
	it('Receive props', () => {
		expect(wrapper.find('#button').length).to.equal(1);
		//console.log(wrapper.debug());
		expect(wrapper.instance().props.title).to.equal('Button Default');
		expect(wrapper.instance().props.disabled).to.equal(false);
		expect(wrapper.instance().props.labeldisplay).to.equal('none');
	});
});
