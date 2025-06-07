import "./RegisterModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useEffect, useState } from "react";

function RegisterModal({ activeModal, onClose, isOpen, email, password }) {



    return (
        <ModalWithForm title="Sign up" buttonText="Sign Up" activeModal={activeModal} isOpen={isOpen} onClose={onClose} >

            <label htmlFor="email" className="modal__label">Email*
                <input type="email" className="modal__input" id="name" placeholder='Email' value={email} />
            </label>
            <label htmlFor="imageUrl" className=" modal__label">Password*
                <input type="password" className="modal__input" id="imageUrl" placeholder='Password' value={password} />
            </label>
            <label htmlFor="imageUrl" className=" modal__label">Name *
                <input type="name" className="modal__input" id="imageUrl" placeholder='Name' value={password} />
            </label>
            <label htmlFor="imageUrl" className=" modal__label">Avatar URL *
                <input type="url" className="modal__input" id="imageUrl" placeholder='Avatar URL' value={password} />
            </label>
            <button className="register_modal-button">or Log In</button>

        </ModalWithForm>
    )

}

export default RegisterModal