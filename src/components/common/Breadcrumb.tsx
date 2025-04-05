import { Category, MENUS } from "../../constants/category";
import styles from "./Breadcrumb.module.css";

interface IBreadCrumbsPros {
  readonly category?: string;
  readonly crumb?: string;
}

const BreadCrumb = ({ category = "", crumb = "" }: IBreadCrumbsPros) => {
  const resolveCategory = Category[category] || category;

  const menu = MENUS[crumb.toUpperCase() as keyof typeof MENUS] ?? crumb;

  return (
    <div className={styles.breadCrumb}>
      <div>{resolveCategory}</div>
      <div className={styles.menu}>{menu}</div>
    </div>
  );
};

export default BreadCrumb;
