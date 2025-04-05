import React from "react";
import styles from "./ProductListItem.module.css";
import { toCurrencyFormat } from "../../utils/util";
import { Link } from "react-router-dom";

export default function ProductListItem(props) {
  const { id, title, img, price } = props;
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.container}>
        <figure>
          <img className={styles.img} src={img} alt="" />
        </figure>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>{toCurrencyFormat(price)}</p>
        </div>
      </div>
    </Link>
  );
}
