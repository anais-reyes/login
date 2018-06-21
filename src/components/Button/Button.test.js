import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('renders', () => {
	const wrapper = shallow(<Button title="Button Default" disabled={false} labeldisplay="none" />);
	expect(wrapper.instance().props.title).to.equal('Button Default');
	expect(wrapper.instance().props.disabled).to.equal(false);
	expect(wrapper.instance().props.labeldisplay).to.equal('none');
});
