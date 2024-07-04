import styles from "./RegisterPage.module.css";
import Button from "../../assets/utils/Button/Button";

function RegisterPage() {
  return (
    <section className={styles.registerSection}>
      <h2 className={styles.registerTitle}>Register</h2>
      <form
        action="register"
        className={styles.registerForm}
        id="register"
        name="register"
      >
        <label htmlFor="register">
          <input type="text" placeholder="Name *" />
        </label>
        <label htmlFor="register">
          <input type="text" placeholder="Email *" autoComplete="off" />
        </label>
        <label htmlFor="register">
          <input type="password" placeholder="Password *" autoComplete="off" />
        </label>
        <div className={styles.btnFormSection}>
          <Button buttonName="Register" style={styles.registerBtn} />
          <Button buttonName="Log in" style={styles.loginBtn} />
        </div>
      </form>
    </section>
  );
}

export default RegisterPage;
