import { Link } from "react-router-dom";
import { toCurrencyFormat } from "../../utils/util";
import Button from "../common/Button";
import styles from "./CartItem.module.css";

export default function CartItem({ item, onMinus, onPlus }) {
  const { id, image, title, price, count, total } = item;

  return (
    <div className={styles.cartItem}>
      <Link to={`/product/${id}`}>
        <figure>
          <img src={image} alt={title} />
        </figure>
      </Link>
      <div className={styles.itemInfo}>
        <Link to={`/product/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>
          {toCurrencyFormat(total)}
          <span>({toCurrencyFormat(price)})</span>
        </p>
        <div className={styles.count}>
          <Button className={styles.countBtn} onClick={() => onMinus(id)}>
            -
          </Button>
          <span>{count}</span>
          <Button className={styles.countBtn} onClick={() => onPlus(id)}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
