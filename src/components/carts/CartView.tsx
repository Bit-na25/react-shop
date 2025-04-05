import { Link } from "react-router-dom";
import styles from "./CartView.module.css";
import Button from "../common/Button";
import Confirm from "../common/Confirm";
import { useRecoilState } from "recoil";
import { cartState } from "../../store/cart";
import CartList from "./CartList";
import { useEffect, useState } from "react";

export default function CartView() {
  const [cart] = useRecoilState(cartState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuy = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className={styles.container}>
        {Object.keys(cart).length > 0 ? (
          <CartList onBuy={handleBuy} />
        ) : (
          <>
            <h1 className={styles.title}>장바구니에 물품이 없습니다.</h1>
            <Link to="/">
              <Button className={styles.btn}>담으러 가기</Button>
            </Link>
          </>
        )}
      </div>
      <Confirm isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
