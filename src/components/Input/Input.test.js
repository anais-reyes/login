import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('Component <Input /> exists with props', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Input disabled={false} title="Default Placeholder" labeldisplay="none" />);
	});
	it('Exists', () => {
		expect(wrapper.find('#input').length).to.equal(1);
		// console.log(wrapper.debug());
		expect(wrapper.instance().props.title).to.equal('Default Placeholder');
		expect(wrapper.instance().props.disabled).to.equal(false);
		expect(wrapper.instance().props.labeldisplay).to.equal('none');
	});
});
