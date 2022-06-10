import React from 'react';
import * as S from './Card.styles';
import * as T from './Card.types';
import { Button } from '../Button/Button';

export function Card({
  image,
  imageAlt,
  desc,
  title,
  align,
  cardType,
  buttonVariant,
  buttonText,
}: T.Card) {
  return (
    <S.Card align={align}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardImg src={image} alt={imageAlt} />
      <S.CardDescription>{desc}</S.CardDescription>
      {cardType === 'button' && (
        <Button variant={buttonVariant} children={buttonText} />
      )}
    </S.Card>
  );
}
