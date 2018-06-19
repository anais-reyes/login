import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';

storiesOf('Dropdown', module).add('Default', () => <Dropdown />);
storiesOf('Dropdown', module).add('Disabled', () => (
	<Dropdown disabled={true} option1="Disabled Test 1" title="Disabled Dropdown" option2="Disabled Test 2" />
));
storiesOf('Dropdown', module).add('Error', () => (
	<Dropdown labeldisplay="block" title="Error Dropdown" option1="Error Test 1" option2="Error Test 2" />
));
