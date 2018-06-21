import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('renders', () => {
	const wrapper = shallow(<Input disabled={false} title="Default Placeholder" labeldisplay="none" />);
	expect(wrapper.instance().props.title).to.equal('Default Placeholder');
	expect(wrapper.instance().props.disabled).to.equal(false);
	expect(wrapper.instance().props.labeldisplay).to.equal('none');
});
