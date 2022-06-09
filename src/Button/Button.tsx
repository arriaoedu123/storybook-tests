import React from 'react';
import * as S from './Button.styles';
import * as T from './Button.types';

export function Button({ variant, children }: T.Button) {
  return <S.Button variant={variant}>{children}</S.Button>;
}