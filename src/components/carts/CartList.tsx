import styles from "./CartList.module.css";
import { addToCart, cartState, removeFromCart } from "../../store/cart";
import { useRecoilState } from "recoil";
import { useProducts } from "../../hooks/useProducts";
import Button from "../common/Button";
import { toCurrencyFormat } from "../../utils/util";
import CartItem from "./CartItem";

export default function CartList({ onBuy }) {
  const { products } = useProducts();
  const [cart, setCart] = useRecoilState(cartState);

  const cartItem = Object.values(cart).map(({ id, count }) => {
    const product = products.find((p) => p.id === id);
    return product
      ? {
          ...product,
          count,
          total: product.price * count,
        }
      : null;
  });

  const totalPrice = cartItem.reduce((acc, cur) => (acc += cur?.total ?? 0), 0);

  const handleMinusCount = (id: string) => {
    setCart(removeFromCart(cart, id));
  };
  const handlePlusCount = (id: string) => {
    setCart(addToCart(cart, id));
  };

  return (
    <div className={styles.cartInfo}>
      <div>
        {cartItem.map((item) =>
          item ? <CartItem key={item.id} item={item} onMinus={handleMinusCount} onPlus={handlePlusCount} /> : null,
        )}
      </div>
      <div className={styles.totalPrice}>
        <span>총 : {toCurrencyFormat(totalPrice)}</span>
        <Button className={styles.buyBtn} onClick={onBuy}>
          구매하기
        </Button>
      </div>
    </div>
  );
}
