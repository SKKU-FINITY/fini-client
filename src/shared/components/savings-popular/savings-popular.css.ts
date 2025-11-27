import { vars } from '../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const savingsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '70rem',
  height: '15rem',
  gap: '1rem',
  padding: '2rem 3rem',
  border: `1px solid ${vars.color.blue200}`,
  borderRadius: '10px',
  cursor: 'pointer',
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '10rem',
  paddingBottom: '1rem',
  alignItems: 'center',
});

export const bank = style({
  fontSize: vars.size.xs,
  fontWeight: vars.weight.medium,
  color: vars.color.black,
  width: '15rem',
});

export const product = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.bold,
  color: vars.color.black,
  margin:0
});

export const detail = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 5rem',
  alignItems: 'center',
});

export const value = style({
  fontSize: vars.size.sm,
  fontWeight: vars.weight.regular,
  color: vars.color.black,
});
