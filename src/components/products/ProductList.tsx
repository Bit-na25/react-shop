import ProductListItem from "./ProductListItem";
import styles from "./ProductList.module.css";
import { useProducts } from "../../hooks/useProducts";
import { getCategories, MENUS } from "../../constants/category";
import ProductListLoad from "./ProductListLoad";

export default function ProductList(props) {
  const { products, isLoading } = useProducts();
  const { category, limit } = props;

  const menu = MENUS[category.toUpperCase() as keyof typeof MENUS];
  const categories = getCategories(menu);
  let filteredProducts = products.filter((p) => categories.includes(p.category));

  const showCount = !limit || filteredProducts.length < limit ? filteredProducts.length : limit;

  filteredProducts = filteredProducts.slice(0, showCount);

  return (
    <div className={styles.container}>
      <h3>{menu}</h3>
      {isLoading ? (
        <div className={styles.productList}>
          <ProductListLoad limit={limit} />
        </div>
      ) : (
        <div className={styles.productList}>
          {filteredProducts.map((p) => (
            <ProductListItem key={p.id} id={p.id} title={p.title} price={p.price} img={p.image} />
          ))}
        </div>
      )}
    </div>
  );
}
