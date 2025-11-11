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
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.blue200}`,
  height: '65px',
});

export const logoContainer = style({
  maxWidth: '650px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const logo = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.extrabold,
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
  fontWeight: vars.weight.extrabold,
  color: vars.color.blue200,
  padding: '10px',
  margin: '0',
  verticalAlign: 'top',
  top: '10px',
  right: '20px',
});

export const menuItem = style({
  padding: '10px 15px',
  borderBottom: `1px solid ${vars.color.blue100}`,
  textDecoration: 'none',
  color: vars.color.blue300,
  display: 'block',
});

export const dropdownMenu = style({
  position: 'absolute',
  top: '100%',
  right: 0,
  
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.blue100}`,
  minWidth: '150px',
  listStyle: 'none',
  padding: '0',
  margin: '0',
});

export const Main = style({
  display: 'block',
  minHeight: '100vh',
  width: '100vw',
  maxWidth: '750px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '75px',
});

export const MainButtonWrapper= style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',
  marginTop: '50px',
  width: '100%',
  maxWidth: '750px',
});

export const MainButton = style({
  padding: '1rem 2rem ',
  maxWidth: '300px !important',
  flexShrink: 0,
  width: '45% !important',
  height: '500px',
  fontSize: '3rem !important',
  fontWeight: `${vars.weight.bold} !important`,
});

globalStyle('html, body', {
  margin: '0',
  padding: '0',
  width: '100%',
  overflowX: 'hidden',
});