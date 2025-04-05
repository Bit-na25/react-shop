import { useEffect } from "react";
import styles from "./ProductView.module.css";
import Button from "../common/Button";
import Rating from "../common/Rating";
import { useRecoilState } from "recoil";
import { addToCart, cartState } from "../../store/cart";
import { toCurrencyFormat } from "../../utils/util";
import { Link } from "react-router-dom";

export default function ProductView({ product }) {
  const { id, image, title, description, price, rating } = product;
  const [cart, setCart] = useRecoilState(cartState);

  const handleAdd = () => {
    const newCart = addToCart(cart, id);

    setCart(newCart);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <figure>
          <img className={styles.img} src={image} alt={title} />
        </figure>
        <div className={styles.infos}>
          <h2 className={styles.name}>
            {title}
            <span className={styles.badge}>NEW</span>
          </h2>
          <p>{description}</p>
          <div className={styles.rating}>
            <Rating rate={rating.rate} count={rating.count} />
          </div>
          <div className={styles.price}>{toCurrencyFormat(price)}</div>
          <div className={styles.buttons}>
            <Button onClick={handleAdd}>장바구니에 담기</Button>
            <Link to="/cart">
              <Button fillButton={false}>장바구니로 이동</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
