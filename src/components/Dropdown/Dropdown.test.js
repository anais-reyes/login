import React from 'react';
import Dropdown from './Dropdown';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('renders', () => {
	const wrapper = shallow(
		<Dropdown
			disabled={false}
			title="Default Dropdown"
			option1="Default Test 1"
			option2="Default Test 2"
			labeldisplay="none"
		/>
	);
	expect(wrapper.instance().props.title).to.equal('Default Dropdown');
	expect(wrapper.instance().props.option1).to.equal('Default Test 1');
	expect(wrapper.instance().props.option2).to.equal('Default Test 2');
	expect(wrapper.instance().props.labeldisplay).to.equal('none');
});
