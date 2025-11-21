import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  width: '50rem',
  gap: '1.2rem',
  marginBottom: '8rem',
});

export const logoImg = style({
  width: '27rem',
  marginBottom: '1rem',
  alignSelf: 'center',
});
