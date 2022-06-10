import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<any> = args => <Card {...args} />;

export const Default = Template.bind({});
export const Button = Template.bind({});

Default.args = {
  title: 'Card',
  image: 'https://avatars.githubusercontent.com/u/73148019?v=4',
  imageAlt: 'Card image',
  desc:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  align: 'left',
  cardType: 'default',
  buttonVariant: 'primary',
  buttonText: 'Button',
};

Button.args = {
  title: 'Card',
  image: 'https://avatars.githubusercontent.com/u/73148019?v=4',
  imageAlt: 'Card image',
  desc:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  align: 'left',
  cardType: 'button',
  buttonVariant: 'primary',
  buttonText: 'Button',
};
