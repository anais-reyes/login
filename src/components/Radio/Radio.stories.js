import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';

export const radio = {
	title: 'Default Radio',
	disabled: false,
	checked: false,
};

storiesOf('Radio', module).add('Default', () => <Radio radio={radio} />);
storiesOf('Radio', module).add('Disabled', () => (
	<Radio radio={{ ...radio, disabled: true, title: 'Disabled radio' }} />
));
storiesOf('Radio', module).add('Error', () => <Radio radio={{ ...radio, title: 'Error radio', checked: true }} />);
