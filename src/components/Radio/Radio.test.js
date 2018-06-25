import React from 'react';
import Radio from './Radio';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('Component <Radio /> exists with props', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Radio title="Default Radio" disabled={false} checked={false} />);
	});
	it('Exists', () => {
		expect(wrapper.find('#radio').length).to.equal(1);
		//console.log(wrapper.debug());
		expect(wrapper.instance().props.title).to.equal('Default Radio');
		expect(wrapper.instance().props.disabled).to.equal(false);
		expect(wrapper.instance().props.checked).to.equal(false);
	});
});
