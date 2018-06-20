import React from 'react';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('renders', () => {
	const wrapper = shallow(<Checkbox title="Default Checkbox" />);
	expect(wrapper.prop('title')).to.equal('Default Checkbox');
});

//test
