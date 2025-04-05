import styles from "./ProductListLoad.module.css";

const ProductListLoad = ({ limit }: { limit: number }) => {
  limit = Number(limit) || 8;
  return (
    <>
      {Array.from(Array(limit)).map((_, index) => {
        return (
          <div key={index} className={styles.container}>
            <div className={styles.img}></div>
            <div className={styles.infos}>
              <div className={styles.info}></div>
              <div className={styles.info}></div>
              <div className={styles.info}></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductListLoad;
