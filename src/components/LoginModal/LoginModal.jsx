import "./LoginModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useEffect, useState } from "react";

function LoginModal({ activeModal, onClose, isOpen, email, password }) {



    return (
        <ModalWithForm title="Log in" buttonText="Log in" activeModal={activeModal} isOpen={isOpen} onClose={onClose} >

            <label htmlFor="name" className="modal__label">Email
                <input type="email" className="modal__input" id="name" placeholder='Email' value={email} />
            </label>
            <label htmlFor="imageUrl" className=" modal__label">Password
                <input type="password" className="modal__input" id="imageUrl" placeholder='Password' value={password} />
            </label>
            <button className="login_modal-button">or Sign up</button>

        </ModalWithForm>
    )

}

export default LoginModal