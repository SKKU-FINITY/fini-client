import * as styles from './spinner.css';

type SpinnerProps = {
  color?: 'pink' | 'blue';
};

const Spinner = ({ color = 'pink' }: SpinnerProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader({ color })}></div>
    </div>
  );
};

export default Spinner;
