import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

export const checkbox = {
	checked: false,
	title: 'Default Checkbox',
	disabled: false,
};

storiesOf('Checkbox', module).add('Default', () => <Checkbox checkbox={checkbox} />);
storiesOf('Checkbox', module).add('Disabled', () => (
	<Checkbox checkbox={{ ...checkbox, disabled: true, title: 'Disabled Checkbox' }} />
));
storiesOf('Checkbox', module).add('Error', () => (
	<Checkbox checkbox={{ ...checkbox, checked: true, title: 'Error Checkbox' }} />
));
