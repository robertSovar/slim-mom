import Button from "../../assets/utils/Button/Button";
import styles from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit(data) {
    const { email, password } = data;
    console.log("submited", email, password);
  }

  function handleRegisterBtn() {
    navigate("/register");
  }
  return (
    <section className={styles.loginSection}>
      <h2 className={styles.loginTitle}>Log in</h2>
      <form
        action="login"
        className={styles.loginForm}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Email *"
            id="email"
            autoComplete="off"
            {...register(
              "email",
              {
                required: "Email is required",
              },
              {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              }
            )}
          />
          <p className="error">{errors.email?.message}</p>
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password *"
            id="password"
            autoComplete="off"
            {...register(
              "password",
              {
                required: "Password is required",
              },
              {
                pattern: {
                  value: /^[A-Za-z]{6,}$/,
                  message: "Password must be at least 6 characters ",
                },
              }
            )}
          />
          <p className="error">{errors.password?.message}</p>
        </label>
        <div className={styles.btnFormSection}>
          <Button type="submit" buttonName="Login" style={styles.loginBtn} />
          <Button
            type="button"
            buttonName="Register"
            style={styles.registerBtn}
            onClick={handleRegisterBtn}
          />
        </div>
        <DevTool control={control} />
      </form>
    </section>
  );
}

export default LoginPage;
