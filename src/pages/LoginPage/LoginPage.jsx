import Button from "../../assets/utils/Button/Button";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <section className={styles.loginSection}>
      <h2 className={styles.loginTitle}>Log in</h2>
      <form action="login" className={styles.loginForm} id="login" name="login">
        <label htmlFor="login">
          <input type="text" placeholder="Email *" autoComplete="off" />
        </label>
        <label htmlFor="login">
          <input type="password" placeholder="Password *" autoComplete="off" />
        </label>
        <div className={styles.btnFormSection}>
          <Button buttonName="Login" style={styles.loginBtn} />
          <Button buttonName="Register" style={styles.registerBtn} />
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
