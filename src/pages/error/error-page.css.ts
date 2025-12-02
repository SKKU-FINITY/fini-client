import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '80vh',
  gap: '1.2rem',
  textAlign: 'center',
  padding: '2rem',
});

export const icon = style({
  fontSize: '5rem',
  marginBottom: '1rem',
});

export const title = style({
  fontSize: vars.size.xl,
  fontWeight: vars.weight.bold,
  color: vars.color.black,
});

export const subtitle = style({
  fontSize: vars.size.md,
  color: vars.color.gray700,
  marginBottom: '2rem',
});

export const buttonWrapper = style({
  width: '22rem',
});
