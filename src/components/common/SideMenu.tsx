import styles from "./SideMenu.module.css";
import clsx from "clsx";

interface SideMenuProps {
  isOpen: boolean;
  onClick: (category: string) => void;
}

export default function SideMenu({ isOpen, onClick }: SideMenuProps) {
  return (
    <div className={clsx(styles.container, { [styles.active]: isOpen })} onClick={(e) => e.stopPropagation()}>
      <div
        className={styles.btn}
        onClick={() => {
          onClick("fashion");
        }}
      >
        패션
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          onClick("accessory");
        }}
      >
        악세서리
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          onClick("digital");
        }}
      >
        디지털
      </div>
    </div>
  );
}
