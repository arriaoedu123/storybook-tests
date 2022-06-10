import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const FieldContainer = styled.div`
  max-width: 320px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabelField = styled.label<any>`
  font-size: 1.4rem;
  font-weight: bold;
  color: #000;
`;

export const TextField = styled.input<any>`
  ${({
    variant = 'primary',
    theme: {
      color: { light },
      components: { inputs },
    },
  }) => css`
    background: ${light};
    border: 2px solid ${inputs[variant].borderColor};
    border-radius: 0.25rem;
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.5rem 1rem;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:focus {
      border: 2px solid ${darken(0.05, inputs[variant].borderColor)};
  `}
`;
