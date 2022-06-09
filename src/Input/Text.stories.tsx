import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputText } from './Text';

export default {
  title: 'Components/Inputs',
  component: InputText,
} as Meta;

const Template: Story<any> = args => <InputText {...args} />;

export const TextField = Template.bind({});

TextField.args = {
  children: 'Text',
};
