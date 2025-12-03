import { vars } from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const dropdownItem = recipe({
  base: {
    fontSize: vars.size.md,
    fontWeight: vars.weight.regular,
    padding: '1.2rem',
    cursor: 'pointer',
    backgroundColor: vars.color.white,
    color: vars.color.gray600,
    transition: 'background 0.15s ease',
    selectors: {
      '&:hover:where(:not([data-selected="true"]))': {
        backgroundColor: vars.color.gray200,
      },
      '&:not(:disabled):active': {
        backgroundColor: vars.color.gray300,
      },
    },
  },

  variants: {
    color: {
      pink: {},
      blue: {},
    },
  },

  defaultVariants: {
    color: 'pink',
  },
});

export const selectedPink = style({
  backgroundColor: vars.color.pink100,
});

export const selectedBlue = style({
  backgroundColor: vars.color.blue100,
});
