import styles from "./RegisterPage.module.css";
import Button from "../../assets/utils/Button/Button";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RegisterPage() {
  const { control, handleSubmit, setValue, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(data) {
    const { name, email, password } = data;
    console.log(data); // Log data to verify payload
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://slim-mom-backend-gt3y.onrender.com/api/auth/signup",
        { name, email, password }
      );
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  function handleLoginBtn() {
    navigate("/login");
  }

  useEffect(() => {
    setValue("name", "");
    setValue("email", "");
    setValue("password", "");
  }, [setValue]);

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
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Name *"
                id="name"
                autoComplete="off"
              />
            )}
            rules={{ required: "Name is required" }}
          />
          <p className="error">{errors.name?.message}</p>
        </label>
        <label htmlFor="email">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="email" // Change input type to email for better validation
                id="email"
                placeholder="Email *"
                autoComplete="off"
              />
            )}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            }}
          />
          <p className="error">{errors.email?.message}</p>
        </label>
        <label htmlFor="password">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                id="password"
                placeholder="Password *"
                autoComplete="off"
              />
            )}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
          />
          <p className="error">{errors.password?.message}</p>
        </label>
        <div className={styles.btnFormSection}>
          <Button
            type="submit"
            buttonName="Register"
            style={styles.registerBtn}
            disabled={loading} // Disable button while loading
          />
          <Button
            type="button"
            buttonName="Log in"
            style={styles.loginBtn}
            onClick={handleLoginBtn}
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

export default RegisterPage;
