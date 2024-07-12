import styles from "./RegisterPage.module.css";
import Button from "../../assets/utils/Button/Button";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit(data) {
    const { name, email, password } = data;
    console.log("submited", name, email, password);
  }

  function handleLoginBtn() {
    navigate("/login");
  }
  return (
    <section className={styles.registerSection}>
      <h2 className={styles.registerTitle}>Register</h2>
      <form
        action="register"
        className={styles.registerForm}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="name">
          <input
            type="text"
            placeholder="Name *"
            id="name"
            autoComplete="off"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <p className="error">{errors.name?.message}</p>
        </label>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            placeholder="Email *"
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
            id="password"
            placeholder="Password *"
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
          <Button
            type="submit"
            buttonName="Register"
            style={styles.registerBtn}
          />
          <Button
            type="button"
            buttonName="Log in"
            style={styles.loginBtn}
            onClick={handleLoginBtn}
          />
        </div>
        <DevTool control={control} />
      </form>
    </section>
  );
}

export default RegisterPage;
