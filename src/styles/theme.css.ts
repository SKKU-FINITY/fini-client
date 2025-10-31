import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    blue100: '#CFE5F3',
    blue200: '#9DC4DD',
    blue300: '#6AA3C2',

    pink100: '#F8D6D6',
    pink200: '#F5AFAF',
    pink300: '#F07C7C',

    black: '#000000',
    white: '#FFFFFF',
    gray: '#AAAAAA',
    danger: '#FF0000',
  },
  size: {
    xl: '3rem',
    lg: '2.5rem',
    md: '2rem',
    sm: '1.8rem',
    xs: '1.5rem',
  },
  weight: {
    thin: '100',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
});
