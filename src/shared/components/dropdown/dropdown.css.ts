import { vars } from '../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const dropdownWrapper = style({
  position: 'relative',
  width: '50rem',
});

export const dropdownContainer = style({
  display: 'flex',
  width: '100%',
  height: '5.6rem',
  padding: '1.6rem 1.6rem 1.6rem 2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '12px',
  border: `1px solid ${vars.color.gray500}`,
  backgroundColor: vars.color.white,
  cursor: 'pointer',
  userSelect: 'none',
});

export const dropdownContainerOpen = style([
  dropdownContainer,
  {
    border: `1px solid ${vars.color.pink300}`,
  },
]);

export const icon = style({
  transition: 'transform 0.3s ease',
});

export const dropdownPlaceholder = style({
  fontSize: vars.size.sm,
  fontWeight: vars.weight.regular,
  color: vars.color.gray600,
});

export const dropdownList = style({
  position: 'absolute',
  top: '100%',
  marginTop: '0.8rem',
  width: '100%',
  padding: '1.2rem 0',
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray500}`,
  borderRadius: '12px',
  zIndex: 100,
  userSelect: 'none',
});

export const dropdownItem = style({
  fontSize: vars.size.md,
  fontWeight: vars.weight.regular,
  color: vars.color.gray600,
  padding: '1.2rem',
  cursor: 'pointer',
  selectors: {
    '&:hover:where(:not([data-selected="true"]))': {
      backgroundColor: vars.color.white,
    },
    '&:not(:disabled):active': {
      backgroundColor: vars.color.gray500,
    },
  },
});

export const dropdownItemSelected = style([
  dropdownItem,
  {
    backgroundColor: vars.color.pink100,
  },
]);
