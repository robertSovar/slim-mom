import Button from "../../assets/utils/Button/Button";
import styles from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function LoginPage() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(data) {
    const { email, password } = data;
    console.log("submited", email, password);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://slim-mom-backend-c3173ac7e4c4.herokuapp.com/api/auth/login",
        { email, password }
      );
      console.log("Login successful:", response.data);
      // Optionally, save the token to localStorage or state
      localStorage.setItem("token", response.data.token);
      // Redirect to the dashboard or another page
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password *"
            id="password"
            autoComplete="off"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>
        </label>
        <div className={styles.btnFormSection}>
          <Button
            type="submit"
            buttonName="Login"
            style={styles.loginBtn}
            disabled={loading} // Disable button while loading
          />
          <Button
            type="button"
            buttonName="Register"
            style={styles.registerBtn}
            onClick={handleRegisterBtn}
          />
          {error && (
            <div className="error" role="alert">
              {error}
            </div>
          )}
        </div>
        <DevTool control={control} />
      </form>
    </section>
  );
}

export default LoginPage;
