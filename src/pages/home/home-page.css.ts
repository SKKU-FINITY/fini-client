import { vars } from '../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  color: vars.color.blue200,
  fontSize: vars.size.xl,
  fontWeight: vars.weight.bold,
});
