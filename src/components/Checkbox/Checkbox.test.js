import React from 'react';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('Having a checkbox', () => {
	let wrapper;
	it('Should exist', () => {
		expect(Checkbox).toBeDefined();
	});

	beforeEach(() => {
		wrapper = shallow(<Checkbox checked={false} disabled={false} title="Default Check" />);
	});
	it('Then it should pass all props ', () => {
		expect(wrapper.find('#checkbox').length).to.equal(1);
		//console.log(wrapper.debug());
		expect(wrapper.instance().props.title).to.equal('Default Check');
		expect(wrapper.instance().props.disabled).to.equal(false);
		expect(wrapper.instance().props.checked).to.equal(false);
	});
});
