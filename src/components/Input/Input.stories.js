import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

storiesOf('Input', module).add('default', () => <Input />);
storiesOf('Input', module).add('Disabled', () => <Input title="Disabled Placeholder" disabled={true} />);
storiesOf('Input', module).add('Error', () => <Input labeldisplay="block" title="Error placeholder" />);
