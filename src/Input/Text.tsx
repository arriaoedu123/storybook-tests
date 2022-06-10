import React from 'react';
import * as S from './Text.styles';
import * as T from './Text.types';

export const InputText = ({ children, variant, ...props }: T.Text) => {
  return (
    <S.FieldContainer>
      <S.LabelField>{children}</S.LabelField>
      <S.TextField {...props} variant={variant} type="text" />
    </S.FieldContainer>
  );
};
