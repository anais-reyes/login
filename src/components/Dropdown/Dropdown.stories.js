import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';

export const dropdown = {
	disabled: false,
	title: 'Default Dropdown',
	option1: 'Default Test 1',
	option2: 'Default Test 2',
	labeldisplay: 'none',
};

storiesOf('Dropdown', module).add('Default', () => <Dropdown dropdown={dropdown} />);
storiesOf('Dropdown', module).add('Disabled', () => (
	<Dropdown
		dropdown={{
			...dropdown,
			disabled: true,
			option1: 'Disabled Test 1',
			title: 'Disabled Dropdown',
			option2: 'Disabled Test 2',
		}}
	/>
));
storiesOf('Dropdown', module).add('Error', () => (
	<Dropdown
		dropdown={{
			...dropdown,
			labeldisplay: 'block',
			title: 'Error Dropdown',
			option1: 'Error Test 1',
			option2: 'Error Test 2',
		}}
	/>
));
