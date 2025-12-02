import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const detailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '70rem',
  gap: '1rem',
  border: `1px solid ${vars.color.blue300}`,
  borderRadius: '10px',
  padding: '2rem 3rem',
  marginBottom: '2rem',
  marginTop: '9rem',
});

export const notFound = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.bold,
  color: vars.color.gray800,
});

export const bank = style({
  fontSize: vars.size.md,
  fontWeight: vars.weight.bold,
  color: vars.color.blue300,
});

export const product = style({
  fontSize: vars.size.xl,
  fontWeight: vars.weight.bold,
  color: vars.color.blue300,
  paddingBottom: '1rem',
});

export const detailTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
  paddingBottom: '1.5rem',
});

export const textContainer = style({
  display: 'flex',
  gap: '0.5rem',
});

export const textColContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',
});

export const textTitle = style({
  fontSize: vars.size.sm,
  fontWeight: vars.weight.semibold,
  color: vars.color.blue300,
});

export const textValue = style({
  fontSize: vars.size.sm,
  fontWeight: vars.weight.medium,
  color: vars.color.gray800,
});

export const pre = style({
  whiteSpace: 'pre-wrap',
  fontFamily: 'inherit',
  fontSize: vars.size.xs,
  color: vars.color.gray800,
  fontWeight: vars.weight.regular,
  lineHeight: '2rem',
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  borderTop: `1.2px solid ${vars.color.blue300}`,
  paddingTop: '1.5rem',
  gap: '0.7rem',
});

export const optionText = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.bold,
  color: vars.color.blue300,
  paddingBottom: '0.5rem',
});

export const similarProductsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2rem',
  paddingBottom: '5rem',
});

export const similarProductsList = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2rem',
  paddingBottom: '5rem',
  gap: '1.2rem',
});

export const similarTitle = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.bold,
  color: vars.color.blue300,
});

export const similarText = style({
  fontSize: vars.size.ms,
  fontWeight: vars.weight.regular,
  color: vars.color.gray700,
});
