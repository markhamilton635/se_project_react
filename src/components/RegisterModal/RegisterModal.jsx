import "./RegisterModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useState } from "react";

function RegisterModal({ activeModal, onClose, isOpen, handleRegistration }) {

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

            <label htmlFor="email" className="modal__label">Email*
                <input type="email" className="modal__input" id="name" placeholder='Email' value={data.email} onChange={handleChange} />
            </label>
            <label htmlFor="password" className=" modal__label">Password*
                <input type="password" className="modal__input" id="password" placeholder='Password' value={data.password} onChange={handleChange} />
            </label>
            <label htmlFor="name" className=" modal__label">Name *
                <input type="name" className="modal__input" id="name" placeholder='Name' value={data.name} onChange={handleChange} />
            </label>
            <label htmlFor="imageUrl" className=" modal__label">Avatar URL *
                <input type="url" className="modal__input" id="imageUrl" placeholder='Avatar URL' value={data.avatar} onChange={handleChange} />
            </label>
            <button className="register_modal-button">or Log In</button>

        </ModalWithForm>
    )

}

export default RegisterModal