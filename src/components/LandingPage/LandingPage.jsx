import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <section className={styles.landingPageSection}>
      <h1 className={styles.landingPageTitle}>
        Calculate your daily calorie intake right now{" "}
      </h1>
      <form action="quiz" className={styles.quizFormContainer}>
        <label>
          <input
            type="number"
            name="height"
            id="height"
            placeholder="Height *"
            required
          />
        </label>
        <label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Age *"
            required
          />
        </label>
        <label>
          <input
            type="number"
            name="current"
            id="current"
            placeholder="Current weight *"
            required
          />
        </label>
        <label>
          <input
            type="number"
            name="desired"
            id="desired"
            placeholder="Desired weight *"
            required
          />
        </label>
        <div className={styles.bloodTypeFormContainer}>
          <p className={styles.bloodTypeParagraph}>Blood type *</p>
          <div className={styles.bloodTypeForm}>
            <label>
              <input type="radio" name="blood_type" value="1" required />1
            </label>
            <br />
            <label>
              <input type="radio" name="blood_type" value="2" />2
            </label>
            <br />
            <label>
              <input type="radio" name="blood_type" value="3" />3
            </label>
            <br />
            <label>
              <input type="radio" name="blood_type" value="4" />4
            </label>
            <br />
          </div>
        </div>
        <div className={styles.bloodTypeBtnContainer}>
          <button type="submit" className={styles.submitFormBtn}>
            Start losing weight
          </button>
        </div>
      </form>
    </section>
  );
}

export default LandingPage;
