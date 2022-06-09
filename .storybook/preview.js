import { ThemeProvider } from 'styled-components';
import { defaultDS } from '../src/shared/defaultDS';
import { addDecorator } from '@storybook/react';

addDecorator(story => {
  return <ThemeProvider theme={defaultDS}>{story()}</ThemeProvider>;
});

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
