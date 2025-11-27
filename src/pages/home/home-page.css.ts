import { vars } from '../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const Main = style({
  display: 'block',
  minHeight: '100vh',
  width: '100vw',
  maxWidth: '70rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '11rem',
  paddingBottom: '4rem',
});

export const MainButtonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  width: '100%',
  maxWidth: '70rem',
});

export const MainButton = style({
  padding: '1rem 2rem ',
  maxWidth: '30rem',
  flexShrink: 0,
  width: '45%',
  height: '35rem',
  fontSize: '3rem',
  fontWeight: vars.weight.bold,
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const popularity_Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '5rem',
  width: '100%',
  maxWidth: '70rem',
});

export const popularity_Title = style({
  fontSize: vars.size.xl,
  color: vars.color.gray900,
  marginBottom: '3rem',
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
