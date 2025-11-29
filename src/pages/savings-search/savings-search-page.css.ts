import { vars } from '../../styles/theme.css';
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
    gap: '1rem',
    marginBottom: '3rem',
});

export const sectionTitle = style({
    fontSize: vars.size.md,
    color: vars.color.black,
    marginBottom: '1rem',
});

export const bankContainer = style({
    display: 'flex',
    flexDirection: 'column',
    width: '70rem',
    gap: '1rem',
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

export const bankButtonSelected = style({
    border: `2px solid ${vars.color.blue300}`,
    backgroundColor: vars.color.blue100,
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
    backgroundColor: vars.color.blue300,
    fontSize: vars.size.md,
    fontWeight: vars.weight.bold,
    padding: '0.5rem 1rem',
});

export const termContainer = style({
    display: 'flex',
    gap: '1rem',
    width: '70rem',
    alignItems: 'center',
    justifyContent: 'center',
});

export const searchContainer = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '2rem',
});

export const searchButton = style({
    backgroundColor: vars.color.blue300,
    color: vars.color.white,
    fontSize: vars.size.md,
    fontWeight: vars.weight.bold,
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '11rem',
});

export const savingListContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '2rem',
});

globalStyle(`${bankLogo} svg`, {
    width: '100%',
    height: '100%',
});