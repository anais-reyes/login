import React from 'react';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('renders', () => {
	const wrapper = shallow(<Checkbox checked={false} disabled={false} title="Default Check" />);
	expect(wrapper.instance().props.title).to.equal('Default Check');
	expect(wrapper.instance().props.disabled).to.equal(false);
	expect(wrapper.instance().props.checked).to.equal(false);
});
