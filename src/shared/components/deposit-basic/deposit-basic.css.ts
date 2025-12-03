import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const depositContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '70rem',
  gap: '1rem',
  padding: '2rem 3rem',
  border: `1px solid ${vars.color.pink300}`,
  borderRadius: '10px',
  cursor: 'pointer',
});

export const bank = style({
  fontSize: vars.size.sm,
  fontWeight: vars.weight.medium,
  color: vars.color.gray700,
});

export const product = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.bold,
  color: vars.color.gray700,
  paddingBottom: '1rem',
});

export const detail = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 5rem',
});

export const detailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  alignItems: 'center',
  width: '7rem',
});

export const title = style({
  fontSize: vars.size.xs,
  fontWeight: vars.weight.medium,
  color: vars.color.gray700,
});

export const value = style({
  fontSize: vars.size.sm,
  fontWeight: vars.weight.regular,
  color: vars.color.gray700,
});
