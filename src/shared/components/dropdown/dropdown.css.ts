import { vars } from '../../../styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const dropdownWrapper = style({
  position: 'relative',
  width: '50rem',
});

export const dropdownContainer = recipe({
  base: {
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
    transition: 'border-color 0.25s ease',
  },

  variants: {
    color: {
      pink: {},
      blue: {},
    },
    open: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: { color: 'pink', open: true },
      style: { borderColor: vars.color.pink300 },
    },
    {
      variants: { color: 'blue', open: true },
      style: { borderColor: vars.color.blue300 },
    },
  ],

  defaultVariants: {
    color: 'pink',
    open: false,
  },
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

export const icon = style({
  transition: 'transform 0.3s ease',
});
