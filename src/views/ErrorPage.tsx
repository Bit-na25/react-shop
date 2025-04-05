import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import Button from "../components/common/Button";

const ErrorPage = () => {
  return (
    <>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>페이지를 찾을 수 없습니다.</p>
      <div className={styles.link}>
        <Link to="/">
          <Button className={styles.btn}>메인으로</Button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
