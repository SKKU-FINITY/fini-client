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
    danger: '#FF0000',

    positive: '#2E8B57',
    negative: '#D9534F',

    gray100: '#F5F5F5',
    gray200: '#E5E5E5',
    gray300: '#D4D4D4',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',
  },
  size: {
    xl: '3rem',
    lg: '2.5rem',
    md: '2rem',
    sm: '1.8rem',
    ms: '1.6rem',
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
