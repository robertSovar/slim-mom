import Button from "../../assets/utils/Button/Button";
import styles from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className={styles.notFoundPageSection}>
      <h1>Ooops....This page could not be found</h1>
      <Link to={"/"}>
        <Button buttonName={"Return home"} />
      </Link>
    </div>
  );
}

export default NotFoundPage;
