import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/theme.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const wrapper = style({
  width: '100%',
  height: '40vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const loader = recipe({
  base: {
    width: '4rem',
    height: '4rem',
    border: `4px solid ${vars.color.gray300}`,
    borderRadius: '50%',
    animation: `${spin} 0.7s linear infinite`,
  },

  variants: {
    color: {
      pink: { borderTopColor: vars.color.pink300 },
      blue: { borderTopColor: vars.color.blue300 },
    },
  },

  defaultVariants: {
    color: 'pink',
  },
});
