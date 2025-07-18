import './ModalWithForm.css'
import darkClose from "../../assets/darkClose.svg"
import { useEffect } from 'react';

function ModalWithForm({ children, buttonText, title, onClose, isOpen, onSubmit, customButtonClass, customContentClass }) {

    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (e) => {
            if (e.target.classList.contains("modal") || e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleClickOutside);
        }
    }, [onClose, isOpen]);






    return (
        <div className={`modal ${isOpen && "modal_opened"}`}>
            <div className={`modal__content ${customContentClass || ''}`}>
                <h2 className="modal__title">{title}</h2>
                <button onClick={onClose} type="button" className="modal__close">
                    <img src={darkClose} alt="close icon" />
                </button>
                <form onSubmit={onSubmit} className="modal__form">
                    {children}
                    <button type="submit"  className={`modal__submit ${customButtonClass || ''}`}>
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    )

}

export default ModalWithForm