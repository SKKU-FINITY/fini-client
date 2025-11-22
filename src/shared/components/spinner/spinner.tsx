import * as styles from './spinner.css';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;
