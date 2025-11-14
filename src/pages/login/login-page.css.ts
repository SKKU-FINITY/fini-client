import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  width: '50rem',
  minHeight: '100vh',
  gap: '1.2rem',
});
