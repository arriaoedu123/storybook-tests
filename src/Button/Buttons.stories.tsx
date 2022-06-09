import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';
import styled from 'styled-components';

export default {
  title: 'Components/Buttons',
  component: Button,
} as Meta;

const StyledButtons = styled.div<any>`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Template: Story<any> = args => {
  return (
    <StyledButtons>
      <Button
        {...args}
        name="primaryButton"
        variant={'primary'}
        children={'Primary'}
      />
      <Button
        {...args}
        name="secondaryButton"
        variant={'secondary'}
        children={'Secondary'}
      />
      <Button
        {...args}
        name="successButton"
        variant={'success'}
        children={'Success'}
      />
      <Button
        {...args}
        name="dangerButton"
        variant={'danger'}
        children={'Danger'}
      />
      <Button
        {...args}
        name="warningButton"
        variant={'warning'}
        children={'Warning'}
      />
      <Button
        {...args}
        name="infoButton"
        icon="maximize"
        variant={'info'}
        children={'Info'}
      />
      <Button
        {...args}
        name="lightButton"
        variant={'light'}
        children={'Light'}
      />
      <Button {...args} name="darkButton" variant={'dark'} children={'Dark'} />
    </StyledButtons>
  );
};

export const button = Template.bind({});
