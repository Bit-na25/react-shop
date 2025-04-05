import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  fillButton?: boolean;
}

export default function Button({ children, onClick, className, fillButton = true }: props) {
  return fillButton ? (
    <button className={clsx(styles.btn, className)} onClick={onClick}>
      {children}
    </button>
  ) : (
    <button className={clsx(styles.btn, styles.outlineBtn, className)} onClick={onClick}>
      {children}
    </button>
  );
}
