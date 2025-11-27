import { vars } from '../../styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const Main = style({
  display: 'block',
  minHeight: '100vh',
  width: '100vw',
  maxWidth: '750px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '75px',
  paddingBottom: '50px',
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
  height: '350px',
  fontSize: '3rem !important',
  fontWeight: `${vars.weight.bold} !important`,
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const popularity_Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '50px',
  width: '100%',
  maxWidth: '750px',
});

export const popularity_Title = style({
  fontSize: vars.size.xl,
  color: vars.color.gray900,
  marginBottom: '5rem',
});

export const contentWrapper = style({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '5rem',
});

export const sectionTitle = style({
  fontSize: vars.size.lg,
  marginBottom: '0.5rem',
  color: 'var.color.black',
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const emptyText = style({
  textAlign: 'center',
  padding: '2rem',
  color: 'var.color.gray500',
  backgroundColor: 'var.color.gray100',
  borderRadius: '8px',
});


globalStyle('html, body', {
  margin: '0',
  padding: '0',
  width: '100%',
  overflowX: 'hidden',
});