import { vars } from '../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const depositContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '70rem',
  height: '17rem',
  gap: '1rem',
  padding: '2rem 3rem',
  border: `1px solid ${vars.color.pink300}`,
  borderRadius: '10px',
  cursor: 'pointer',
});

export const bankContainer = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '2rem',
});

export const bank = style({
  fontSize: vars.size.xs,
  fontWeight: vars.weight.medium,
  color: vars.color.gray700,
  width: '15rem',
});

export const productContainer = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '5rem',
});

export const product = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.bold,
  color: vars.color.gray700,
  margin: 0,
});

export const detail = style({
  height: '10rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const value = style({
  fontSize: vars.size.sm,
  fontWeight: vars.weight.regular,
  color: vars.color.gray700,
});
