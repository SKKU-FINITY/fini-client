import { vars } from '@styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'block',
  width: '70rem',
  minHeight: '100vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingBottom: '4rem',
  boxSizing: 'border-box',
  paddingTop: '10rem',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.1rem',
  marginBottom: '3rem',
});

export const sectionTitle = style({
  fontSize: vars.size.lg,
  fontWeight: vars.weight.semibold,
  color: vars.color.black,
  marginBottom: '1rem',
});

export const bankContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '70rem',
  gap: '1.5rem',
  borderRadius: '10px',
});

export const bankGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '1rem',
  justifyContent: 'center',
  alignContent: 'center',
});

export const bankButton = style({
  width: '100%',
  aspectRatio: '1 / 1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  gap: '0.2rem',
  border: `1px solid ${vars.color.gray500}`,
  borderRadius: '5px',
  cursor: 'pointer',
});

export const bankLogo = style({
  width: '5rem',
  height: '5rem',
  marginBottom: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const bankName = style({
  fontSize: vars.size.xxs,
  fontWeight: vars.weight.medium,
  color: vars.color.gray800,
});

export const bankButtonSelected = style({
  border: `2px solid ${vars.color.pink300}`,
  backgroundColor: vars.color.pink100,
});

export const selectAllContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '1rem',
  justifyContent: 'flex-end',
});

export const selectAllButton = style({
  width: '11rem',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: vars.color.pink300,
  fontSize: vars.size.sm,
  fontWeight: vars.weight.semibold,
  padding: '0.6rem 1rem',
  border: 'none',
});

export const termContainer = style({
  display: 'flex',
  gap: '1rem',
  width: '70rem',
  alignItems: 'center',
  justifyContent: 'center',
});

export const termMent = style({
  fontSize: vars.size.ms,
  color: vars.color.gray700,
  paddingBottom: '1rem',
});

export const searchContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: '2rem',
});

export const searchButton = style({
  backgroundColor: vars.color.pink300,
  color: vars.color.white,
  fontSize: vars.size.sm,
  fontWeight: vars.weight.semibold,
  padding: '0.6rem 1rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '11rem',
});

export const depositListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '2rem',
});

export const depositHowSorted = style({
  fontSize: vars.size.ms,
  color: vars.color.gray700,
});

export const depositHowmany = style({
  fontSize: vars.size.ms,
  color: vars.color.gray700,
  marginBottom: '1rem',
});

export const howManyNumber = style({
  fontSize: vars.size.ms,
  color: vars.color.gray800,
  fontWeight: vars.weight.bold,
});

globalStyle(`${bankLogo} svg`, {
  width: '100%',
  height: '100%',
});

export const notFound = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: vars.size.lg,
  fontWeight: vars.weight.bold,
  color: vars.color.gray800,
});
