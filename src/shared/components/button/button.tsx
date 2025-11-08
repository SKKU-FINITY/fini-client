import type { ButtonHTMLAttributes } from 'react';
import * as styles from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'pink' | 'blue' | 'secondary';
}

const Button = ({ variant = 'pink', ...props }: ButtonProps) => {
  return <button className={styles.button({ variant })} {...props} />;
};

export default Button;
