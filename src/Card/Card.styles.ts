import styled, { css } from 'styled-components';

export const Card = styled.div<any>`
  ${({
    align = 'left',
    theme: {
      components: { card },
    },
  }) => css`
    max-width: 380px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: ${card[align].alignItems};
    padding: 20px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  `}
`;

export const CardTitle = styled.h3<any>`
  font-size: 22px;
  font-weight: bold;
`;

export const CardImg = styled.img<any>`
  width: 100%;
`;

export const CardDescription = styled.p<any>`
  font-size: 14px;
`;
