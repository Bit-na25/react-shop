import { Link } from "react-router-dom";
import styles from "./CartIcon.module.css";
import { useRecoilState } from "recoil";
import { cartState } from "../../store/cart";

export default function CartIcon() {
  const [cart] = useRecoilState(cartState);

  const count = Object.values(cart).reduce((acc, { count }) => (acc += count), 0);

  return (
    <div className={styles.icon}>
      <Link to="/cart">
        <span className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className={styles.count}>{count}</span>
        </span>
      </Link>
    </div>
  );
}
