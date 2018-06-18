import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './Input';

export const input = {
	disabled: false,
	title: 'Default Placeholder',
	labeldisplay: 'none',
};

storiesOf('Input', module).add('default', () => <Input input={input} />);
storiesOf('Input', module).add('Disabled', () => (
	<Input input={{ ...input, title: 'Disabled Placeholder', disabled: true }} />
));
storiesOf('Input', module).add('Error', () => (
	<Input input={{ ...input, labeldisplay: 'block', title: 'Error placeholder' }} />
));
