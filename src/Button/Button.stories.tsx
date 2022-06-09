import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Buttons',
  component: Button,
} as Meta;

const Template: Story<any> = args => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Light = Template.bind({});
export const Dark = Template.bind({});

Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
}

Success.args = {
  children: 'Success',
  variant: 'success',
}

Danger.args = {
  children: 'Danger',
  variant: 'danger',
}

Warning.args = {
  children: 'Warning',
  variant: 'warning',
}

Info.args = {
  children: 'Info',
  variant: 'info',
}

Light.args = {
  children: 'Light',
  variant: 'light',
}

Dark.args = {
  children: 'Dark',
  variant: 'dark',
}


