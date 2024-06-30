import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerSection}>
      <p>@2024</p>
      <span>by</span>{" "}
      <a
        href="https://www.linkedin.com/in/robert-sovar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sovar Robert
      </a>
    </div>
  );
}

export default Footer;
