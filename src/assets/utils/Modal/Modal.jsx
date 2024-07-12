import Button from "../Button/Button";
import backImg from "./../../images/modal-img/back-img.png";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

function Modal(props) {
  const navigate = useNavigate();
  const { show, handleClose, children } = props;
  const showHideModal = show ? "modal display-block" : "modal display-none";

  function handleOverlayClose(e) {
    if (e.target === e.currentTarget) {
      // Asigură-te că se închide când se face clic pe overlay
      handleClose();
    }
  }

  function closeModal() {
    handleClose();
  }

  function handleStartLosingWeight() {
    handleClose(); // Închide modalul
    navigate("/register"); // Redirecționează către pagina de înregistrare
  }
  return (
    <div className={showHideModal} onClick={handleOverlayClose}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={closeModal}>
          <img src={backImg} alt="back button" />
        </button>
        <h2>Your recommended daily calorie intake is</h2>
        <span>Number</span>
        <h3>Foods you should not eat</h3>
        <Button
          type="button"
          buttonName={"Start losing weight"}
          onClick={handleStartLosingWeight}
        />
      </section>
    </div>
  );
}

export default Modal;
