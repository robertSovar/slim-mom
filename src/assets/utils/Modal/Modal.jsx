import { useEffect } from "react";
import Button from "../Button/Button";
import backImg from "./../../images/modal-img/back-img.png";
import "./Modal.css";

function Modal(props) {
  const { show, handleClose, children } = props;
  const showHideModal = show ? "modal display-block" : "modal display-none";

  function handleOverlayClose(e) {
    if (e.target.classList.contains("modal")) {
      handleClose();
    }
  }

  return (
    <div className={showHideModal} onClick={handleOverlayClose}>
      <section className="modal-main">
        {children}
        <button onClick={handleOverlayClose}>
          <img src={backImg} alt="back button" />
        </button>
        <h2>Your recommended daily calorie intake is</h2>
        <span>Number</span>
        <h3>Foods you should not eat</h3>
        <Button buttonName={"Start losing weight"} />
      </section>
    </div>
  );
}

export default Modal;
