import "./LogOutModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { removeToken } from "../../utils/token"


function LogOutModal({ activeModal, onClose, isOpen, setIsLoggedIn }) {


    const logOut = (e) => {
        e.preventDefault();
        removeToken();
        setIsLoggedIn(false);
        onClose();
    }



    return (
        <ModalWithForm title="LogOut" buttonText="LogOut" activeModal={activeModal} isOpen={isOpen} onClose={onClose} onSubmit={logOut} >
            <p className="logout__message">Are you sure you want to log out?</p>
            <button onClick={onClose} className="logout__cancel-btn">Cancel</button>

        </ModalWithForm>
    )

}



export default LogOutModal