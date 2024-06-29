import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerSection}>
      <p>@2024</p>
      <span>made by </span>{" "}
      <a
        href="https://www.linkedin.com/in/robert-sovar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sovar Robert Ionut
      </a>
    </div>
  );
}

export default Footer;
