import { style, keyframes } from '@vanilla-extract/css';
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

export const loader = style({
  width: '4rem',
  height: '4rem',
  border: `4px solid ${vars.color.gray300}`,
  borderTopColor: vars.color.pink300,
  borderRadius: '50%',
  animation: `${spin} 0.7s linear infinite`,
});
