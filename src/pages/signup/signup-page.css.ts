import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  width: '50rem',
  minHeight: '100vh',
  gap: '1.2rem',
});

export const errorMsg = style({
  margin: '0',
  textAlign: 'left',
  fontSize: vars.size.xs,
  color: vars.color.danger,
});

export const moveToLogin = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  fontSize: vars.size.xs,
  color: vars.color.black,
});

export const memberText = style({
  margin: '0',
});
