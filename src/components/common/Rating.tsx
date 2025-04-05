import styles from "./Rating.module.css";

type TRatingProps = {
  rate?: number;
  count?: number;
} & typeof defaultProps;

const defaultProps = {
  rate: 0,
  count: 0,
};

const Rating = ({ rate, count }: TRatingProps) => {
  const stars = Array.from(Array(5));
  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
        {stars.map((_, index) => {
          const filled = index < Math.floor(rate);
          const half = rate - index >= 0.5 && rate - index < 1;
          return (
            <span key={index} className={filled ? styles.starFilled : half ? styles.starHalf : styles.starEmpty}>
              ★
            </span>
          );
        })}
      </div>
      <span className={styles.text}>
        {rate} / {count} 참여
      </span>
    </div>
  );
};

export default Rating;
