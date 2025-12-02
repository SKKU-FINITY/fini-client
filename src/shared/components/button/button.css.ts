import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/theme.css';

export const button = recipe({
  base: {
    width: '100%',
    padding: '1rem',
    borderRadius: '0.5rem',
    fontWeight: vars.weight.medium,
    textAlign: 'center',
    fontSize: vars.size.xs,
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',

    selectors: {
      '&:disabled': {
        backgroundColor: vars.color.gray500,
        color: vars.color.white,
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
  },
  variants: {
    variant: {
      pink: {
        backgroundColor: vars.color.pink200,
        color: vars.color.white,
      },
      blue: {
        backgroundColor: vars.color.blue200,
        color: vars.color.white,
      },
      secondary: {
        width: 'auto',
        padding: '0',
        border: 'none',
        backgroundColor: 'transparent',
        color: vars.color.blue300,
        fontSize: vars.size.xs,
        fontWeight: vars.weight.regular,
        textDecoration: 'underline',
      },
    },
  },
  defaultVariants: {
    variant: 'pink',
  },
});
