import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button<any>`
  ${({
    buttonColor,
    variant = 'success',
    theme: {
      components: { botaozin },
    },
  }) => css`
      background: ${buttonColor || botaozin[variant].background};
      border: none;
      border-radius: 6px;
      color: ${botaozin[variant].color};
      font-size: 16px;
      padding: 6px 14px;
      transition: all 0.1s ease-in-out;
      cursor: pointer;

      &:hover {
        background: ${darken(
          0.05,
          buttonColor || botaozin[variant].background
        )};
    `}
`;
