import { botaozin } from '../Button/Button.tokens';
import { inputs } from '../Input/Text.tokens';
import { card } from '../Card/Card.tokens';

export const defaultDS = () => ({
  color: {
    primary: '#00a8ff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#fff',
    black: '#000',
  },

  alignItem: {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  },

  get components() {
    return {
      botaozin: botaozin(this),
      inputs: inputs(this),
      card: card(this),
    };
  },
});
