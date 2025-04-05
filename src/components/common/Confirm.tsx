import { useRecoilState } from "recoil";
import { ICartState, cartState } from "../../store/cart";
import styles from "./Confirm.module.css";
import Button from "./Button";

const Confirm = ({ isModalOpen, onClose }) => {
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  const buyItems = () => {
    setCart({} as ICartState);
    onClose();
  };

  return isModalOpen ? (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <h3 className={styles.title}>정말로 구매하시겠습니까?</h3>
        <p className={styles.message}>장바구니의 모든 상품들이 삭제됩니다.</p>
        <div className={styles.btns}>
          <Button onClick={buyItems}>네</Button>
          <Button fillButton={false} onClick={onClose}>
            아니오
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Confirm;
