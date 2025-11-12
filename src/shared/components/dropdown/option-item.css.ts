import { vars } from '../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const dropdownItem = style({
  fontSize: vars.size.md,
  fontWeight: vars.weight.regular,
  backgroundColor: vars.color.white,
  color: vars.color.gray600,
  padding: '1.2rem',
  cursor: 'pointer',
  selectors: {
    '&:hover:where(:not([data-selected="true"]))': {
      backgroundColor: vars.color.gray200,
    },
    '&:not(:disabled):active': {
      backgroundColor: vars.color.gray300,
    },
  },
});

export const dropdownItemSelected = style([
  dropdownItem,
  {
    backgroundColor: vars.color.pink100,
  },
]);
