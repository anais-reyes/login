import React from 'react';
import Radio from './Radio';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('renders', () => {
	const wrapper = shallow(<Radio title="Default Radio" disabled={false} checked={false} />);
	expect(wrapper.instance().props.title).to.equal('Default Radio');
	expect(wrapper.instance().props.disabled).to.equal(false);
	expect(wrapper.instance().props.checked).to.equal(false);
});
