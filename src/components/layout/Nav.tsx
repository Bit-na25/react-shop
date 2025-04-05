import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import CartIcon from "../common/CartIcon";
import SearchInput from "../common/SearchInput";
import clsx from "clsx";
import { useRecoilState } from "recoil";
import { themeState } from "../../store/theme";

const Nav = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={styles.container}>
      <div className={clsx(styles.inner, "inner-container")}>
        <div className={styles.leftContainer}>
          <div className={styles.sideMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          <Link to="/" className={styles.title}>
            react shop
          </Link>
          <div className={styles.categories}>
            <Link className={styles.categoryBtn} to="/products?category=fashion">
              패션
            </Link>
            <Link className={styles.categoryBtn} to="/products?category=accessory">
              악세서리
            </Link>
            <Link className={styles.categoryBtn} to="/products?category=digital">
              디지털
            </Link>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={clsx(styles.theme, { [styles.rotated]: theme === "dark" })} onClick={handleChangeTheme}>
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </div>
          <SearchInput />
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
