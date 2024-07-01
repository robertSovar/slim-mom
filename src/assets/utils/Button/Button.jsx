import styles from "./Button.module.css";

function Button(props) {
  const { buttonName } = props;
  return (
    <div>
      <button className={styles.btnStyle}>{buttonName}</button>
    </div>
  );
}

export default Button;
