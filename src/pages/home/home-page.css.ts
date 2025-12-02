import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'block',
  minHeight: '100vh',
  width: '70rem',
  margin: 'auto',
  padding: '11rem 0 4rem 0',
});

export const mainButtonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  width: '100%',
});

export const mainButton = style({
  width: '34rem',
  flexShrink: 0,
  height: '40rem',
  fontSize: vars.size.xl,
  fontWeight: vars.weight.bold,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const popularityContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '5rem',
  width: '100%',
});

export const popularityTitle = style({
  fontSize: vars.size.xl,
  fontWeight: vars.weight.medium,
  color: vars.color.gray800,
  marginBottom: '1rem',
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
  fontWeight: vars.weight.medium,
  marginBottom: '0.5rem',
  color: vars.color.gray800,
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const emptyText = style({
  textAlign: 'center',
  padding: '2rem',
  color: vars.color.gray500,
  backgroundColor: vars.color.gray100,
  borderRadius: '8px',
});
