import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.headerSection}>
        <div className={styles.logoAndSpanContainer}>
          <picture className={styles.logoSection}>
            <source
              className={styles.logoPictures}
              srcSet="./assets/images/header-photos/slim-mom-logo-d-1x.webp, ./assets/images/header-photos/slim-mom-logo-d-2x.webp"
              media="(min-width: 1280px)"
            />
            <source
              srcSet="./assets/images/header-photos/slim-mom-logo-t-1x.webp, ./assets/images/header-photos/slim-mom-logo-t-2x.webp"
              media="(min-width: 321px) and (max-width: 768px)"
            />
            <source
              srcSet="./assets/images/header-photos/slim-mom-logo-m-1x.webp, ./assets/images/header-photos/slim-mom-logo-m-2x.webp"
              media="(max-width: 320px)"
            />
            <img
              src="./assets/images/header-photos/slim-mom-logo-d-1x.webp"
              alt="logo"
            />
          </picture>
          <span className={styles.slimSpan}>
            Slim{" "}
            <span className={[styles.slimSpan, styles.slimMom].join(" ")}>
              Mom
            </span>
          </span>
        </div>

        <div className={styles.activeLinksContainer}>
          <div className={styles.activeLinks}>Log in</div>
          <div className={styles.activeLinks}>Registration</div>
        </div>
      </header>
      <hr className={styles.headerUnderline} />
    </>
  );
}

export default Header;
