import React, { HTMLAttributes, ReactNode } from 'react';
import * as S from './Text.styles';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

export const InputText = ({ children, ...props }: Props) => {
  return (
    <S.FieldContainer>
      <S.LabelField>{children}</S.LabelField>
      <S.TextField {...props} type="text" />
    </S.FieldContainer>
  );
};
