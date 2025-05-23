import ProductListItem from "./ProductListItem";
import styles from "./ProductList.module.css";
import { useProducts } from "../../hooks/useProducts";
import { getCategories, MENUS } from "../../constants/category";
import ProductListLoad from "./ProductListLoad";
import clsx from "clsx";

interface ProductListProps {
  category: string;
  limit?: number;
  mode: "scroll" | "grid";
}

export default function ProductList({ category, limit = 0, mode }: ProductListProps) {
  const { products, isLoading } = useProducts();

  const menu = MENUS[category.toUpperCase() as keyof typeof MENUS];
  const categories = getCategories(menu);
  let filteredProducts = products.filter((p) => categories.includes(p.category));

  const showCount = !limit || filteredProducts.length < limit ? filteredProducts.length : limit;

  filteredProducts = filteredProducts.slice(0, showCount);

  const listStyle = clsx(styles.productList, mode === "grid" ? styles.gridList : styles.scrollList);

  return (
    <div className={styles.container}>
      <h3>{menu}</h3>
      {isLoading ? (
        <div className={listStyle}>
          <ProductListLoad limit={limit} />
        </div>
      ) : (
        <div className={listStyle}>
          {filteredProducts.map((p) => (
            <ProductListItem key={p.id} id={p.id} title={p.title} price={p.price} img={p.image} />
          ))}
        </div>
      )}
    </div>
  );
}
