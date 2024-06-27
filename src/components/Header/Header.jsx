import logoM1 from "./../../assets/images/header-photos/slim-mom-logo-m-1x.webp";
import logoM2 from "./../../assets/images/header-photos/slim-mom-logo-m-2x.webp";
import logoT1 from "./../../assets/images/header-photos/slim-mom-logo-t-1x.webp";
import logoT2 from "./../../assets/images/header-photos/slim-mom-logo-t-2x.webp";
import logoD1 from "./../../assets/images/header-photos/slim-mom-logo-d-1x.webp";
import logoD2 from "./../../assets/images/header-photos/slim-mom-logo-d-2x.webp";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.headerSection}>
        <div className={styles.logoAndSpanContainer}>
          <picture className={styles.logoSection}>
            <source
              className={styles.logoPictures}
              srcSet={`${logoD1} 1x,${logoD2} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${logoT1} 1x,${logoT2} 2x`}
              media="(min-width: 321px) and (max-width: 768px)"
            />
            <source
              srcSet={`${logoM1} 1x ,${logoM2} 2x`}
              media="(max-width: 320px)"
            />
            <img src={logoD1} alt="logo" />
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
