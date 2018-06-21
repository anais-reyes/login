import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
	.add('default', () => <Button onClick={action('print something')} />)
	.add('Disabled', () => <Button disabled={true} labeldisplay="none" title="Button Disabled" />)
	.add('Error', () => <Button title="Button Error" labeldisplay="block" />);
