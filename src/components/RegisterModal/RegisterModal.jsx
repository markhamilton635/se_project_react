import "./RegisterModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useState } from "react";

function RegisterModal({ activeModal, onClose, isOpen, handleRegistration, handleLoginClick }) {

    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        avatar: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(data)

    };




    return (
        <ModalWithForm title="Sign up" buttonText="Sign Up" activeModal={activeModal} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >

            <label htmlFor="register-email" className="modal__label">Email*
                <input autoComplete="current-email" type="email" name="email" className="modal__input" id="register-email" placeholder='Email' value={data.email} onChange={handleChange} />
            </label>
            <label htmlFor="register-password" className=" modal__label">Password*
                <input autoComplete="current-password" type="password" name="password" className="modal__input" id="register-password" placeholder='Password' value={data.password} onChange={handleChange} />
            </label>
            <label htmlFor="register-name" className=" modal__label">Name *
                <input type="name" name="name" className="modal__input" id="register-name" placeholder='Name' value={data.name} onChange={handleChange} />
            </label>
            <label htmlFor="register-avatar" className=" modal__label">Avatar URL *
                <input type="url" name="avatar" className="modal__input" id="register-avatar" placeholder='Avatar URL' value={data.avatar} onChange={handleChange} />
            </label>
            <button type="button" onClick={handleLoginClick} className="register_modal-button">or Log In</button>

        </ModalWithForm>
    )

}

export default RegisterModal