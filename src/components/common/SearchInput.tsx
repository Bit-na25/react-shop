import { useEffect, useState } from "react";
import styles from "./SearchInput.module.css";
import { IProduct, useProducts } from "../../hooks/useProducts";
import { useNavigate } from "react-router";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [isListOpen, setIsListOpen] = useState(false);
  const { products } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredData(
      products.filter((item) => item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())),
    );
  }, [searchValue]);

  const handleItemClick = (id: number) => {
    setSearchValue("");
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="검색"
          value={searchValue}
          onFocus={() => setIsListOpen(true)}
          onBlur={() => setTimeout(() => setIsListOpen(false), 100)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <ul className={styles.list}>
        {isListOpen &&
          searchValue.length > 0 &&
          filteredData.map((p) => (
            <li key={p.id}>
              <button onClick={() => handleItemClick(p.id)}>{p.title}</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
