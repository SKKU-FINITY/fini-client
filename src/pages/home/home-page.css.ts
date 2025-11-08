import { vars } from '../../styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';


export const title = style({
  color: vars.color.blue200,
  fontSize: vars.size.xl,
  fontWeight: vars.weight.bold,
});

export const header = style({
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '750px',
  width: '100%',
  position: 'fixed',
  top: 20,
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: vars.color.white,
  boxShadow: `0 2px 4px ${vars.color.gray}`,
  height: '65px',
});

export const logo = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.bold,
  color: vars.color.blue200,
  display: 'block',
  top: '10px',
  left: '20px',
});


export const menuButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: vars.size.lg,
  color: vars.color.blue200,
  padding: '10px',
  margin: '0',
  verticalAlign: 'top',
  top: '10px',
  right: '20px',
});

export const menuItem = style({
  padding: '10px 15px',
  borderBottom: `1px solid ${vars.color.gray}`,
  textDecoration: 'none',
  color: vars.color.black,
  display: 'block',
});

export const dropdownMenu = style({
  position: 'absolute',
  top: '100%',
  right: 0,
  
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray}`,
  minWidth: '150px',
  listStyle: 'none',
  padding: '0',
  margin: '0',
});

export const main = style({
  padding: '20px',
});


globalStyle('html, body', {
  margin: '0',
  padding: '0',
  width: '100%',
  overflowX: 'hidden',
});