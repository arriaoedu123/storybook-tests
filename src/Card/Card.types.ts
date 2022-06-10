export interface Card {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  cardType: 'default' | 'button';
  buttonVariant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  align?: 'left' | 'center' | 'right';
}
