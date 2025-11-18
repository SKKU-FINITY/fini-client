import { vars } from '../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  width: '100%',
  height: '6.4rem',
  position: 'fixed',
  top: 0,
  left: 0,
  background: 'white',
  borderBottom: `1px solid ${vars.color.gray300}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 10,
  padding: '0 10rem',
});

export const logo = style({
  fontSize: '2.4rem',
  fontWeight: 'bold',
  color: vars.color.gray800,
  cursor: 'pointer',
  userSelect: 'none',
});

export const logout = style({
  width: 'auto',
  padding: '0',
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.color.gray800,
  fontSize: vars.size.xs,
  fontWeight: vars.weight.regular,
  cursor: 'pointer',
  userSelect: 'none',
});
