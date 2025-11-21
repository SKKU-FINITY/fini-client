import { vars } from '../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const savingsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '70rem',
  gap: '0.8rem',
  padding: '2rem 3rem',
  border: `1px solid ${vars.color.pink300}`,
  borderRadius: '10px',
  cursor: 'pointer',
});

export const bank = style({
  fontSize: vars.size.ms,
  fontWeight: vars.weight.medium,
  color: vars.color.gray700,
});

export const product = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  paddingBottom: '1rem',
});

export const productName = style({
  fontSize: vars.size.md,
  fontWeight: vars.weight.bold,
  color: vars.color.gray700,
});

export const productDetail = style({
  fontSize: vars.size.sm,
  fontWeight: vars.weight.bold,
  color: vars.color.gray700,
});

export const detail = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const detailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  alignItems: 'center',
  width: '10rem',
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

export const positive = style({
  color: vars.color.positive,
  fontWeight: vars.weight.medium,
});

export const negative = style({
  color: vars.color.negative,
  fontWeight: vars.weight.medium,
});

export const zero = style({
  color: vars.color.gray600,
  fontWeight: vars.weight.medium,
});
