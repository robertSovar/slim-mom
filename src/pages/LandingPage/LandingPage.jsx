import { useState, useEffect } from "react";
import Modal from "../../assets/utils/Modal/Modal.jsx";
import styles from "./LandingPage.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function LandingPage() {
  const form = useForm();
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;

  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function onSubmit(data) {
    const { height, age, current, desired, bloodType } = data;
    setIsFormCompleted(true);
    console.log(
      `Height: ${height} Age:${age} Current weight: ${current} Desired weight: ${desired} Blood type:${bloodType}`
    );
    setIsOpenModal(true);
  }

  function handleEscClose(e) {
    if (e.key === "Escape") {
      setIsOpenModal(false);
    }
  }

  useEffect(() => {
    if (isOpenModal === true) {
      document.addEventListener("keydown", handleEscClose);
    } else {
      document.removeEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpenModal]);

  function showModal() {
    setIsOpenModal(true);
  }

  function hideModal() {
    setIsOpenModal(false);
  }
  return (
    <section className={styles.landingPageSection}>
      <h1 className={styles.landingPageTitle}>
        Calculate your daily calorie intake right now{" "}
      </h1>
      <form
        action="quiz"
        className={styles.quizFormContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ul className={styles.gridContainer}>
          <li className={styles.firstGrid}>
            {" "}
            <label htmlFor="height">
              <input
                type="number"
                id="height"
                placeholder="Height *"
                min={54}
                max={246}
                {...register("height", {
                  required: "Height is requierd",
                  min: { value: 54, message: "Height must be at least 54" },
                  max: {
                    value: 246,
                    message: "Height must be no more than 246",
                  },
                })}
              />
              <p className="error">{errors.height?.message}</p>
            </label>
          </li>
          <li className={styles.secondGrid}>
            <label htmlFor="age">
              <input
                type="number"
                id="age"
                placeholder="Age *"
                {...register("age", {
                  required: "Age is required",
                  min: { value: 14, message: "Age must be greater than 14" },
                  max: { value: 122, message: "Age must be no more than 122" },
                })}
              />
              <p className="error">{errors.age?.message}</p>
            </label>
          </li>
          <li className={styles.thirdGrid}>
            <label htmlFor="current">
              <input
                type="number"
                id="current"
                placeholder="Current weight *"
                {...register("current", {
                  required: "Current weight required",
                  min: {
                    value: 18,
                    message: "Current weight must be at least 18",
                  },
                  max: {
                    value: 635,
                    message: "Current weight must be no more than 635",
                  },
                })}
              />
              <p className="error">{errors.current?.message}</p>
            </label>
          </li>
        </ul>
        <div className={styles.bloodTypeFormContainer}>
          <label htmlFor="desired">
            <input
              type="number"
              id="desired"
              placeholder="Desired weight *"
              {...register("desired", {
                required: "Desired weight is required",
                min: {
                  value: 18,
                  message: "Current weight must be at least 18",
                },
                max: {
                  value: 635,
                  message: "Current weight must be no more than 635",
                },
              })}
            />
            <p className="error">{errors.desired?.message}</p>
          </label>
          <p className={styles.bloodTypeParagraph}>Blood type *</p>
          <div className={styles.bloodTypeForm}>
            <label>
              <input type="radio" value="1" {...register("bloodType")} />1
            </label>
            <br />
            <label>
              <input type="radio" value="2" {...register("bloodType")} />2
            </label>
            <br />
            <label>
              <input type="radio" value="3" {...register("bloodType")} />3
            </label>
            <br />
            <label>
              <input type="radio" value="4" {...register("bloodType")} />4
            </label>
            <br />
          </div>
        </div>
        <div className={styles.bloodTypeBtnContainer}>
          <button type="submit" className={styles.submitFormBtn}>
            Start losing weight
          </button>
          <Modal show={isOpenModal} handleClose={hideModal} />
        </div>
        <DevTool control={control} />
      </form>
    </section>
  );
}

export default LandingPage;
