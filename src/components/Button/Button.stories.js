import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const button = {
	title: 'Button Default',
	disabled: false,
	updatedAt: new Date(2018, 0, 1, 9, 0),
	labeldisplay: 'none',
};

storiesOf('Button', module)
	.add('default', () => <Button button={button} />)
	.add('Disabled', () => <Button button={{ ...button, disabled: true, title: 'Button Disabled' }} />)
	.add('Error', () => <Button button={{ ...button, title: 'Button Error', labeldisplay: 'block' }} />);
