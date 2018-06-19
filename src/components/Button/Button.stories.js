import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
	.add('default', () => <Button />)
	.add('Disabled', () => <Button disabled={true} labeldisplay="none" title="Button Disabled" />)
	.add('Error', () => <Button title="Button Error" labeldisplay="block" />);
