import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  return (
    <div className={styles['gradient-container']}>
      <div className={`${styles.blob} ${styles['blob-1']}`}></div>
      <div className={`${styles.blob} ${styles['blob-2']}`}></div>
      <div className={`${styles.blob} ${styles['blob-3']}`}></div>
    </div>
  );
};

export default AnimatedBackground;