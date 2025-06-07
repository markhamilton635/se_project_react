import "./LoginModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useState } from "react";

function LoginModal({ activeModal, onClose, isOpen, email, password, handleLogin }) {

 const [data, setData] = useState({
    email: "",
    password: "",
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
    handleLogin(data);
  };

    return (
        <ModalWithForm title="Log in" buttonText="Log in" activeModal={activeModal} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >

            <label htmlFor="email" className="modal__label">Email
                <input type="email" className="modal__input" id="email" placeholder='Email' value={email} onChange={handleChange} />
            </label>
            <label htmlFor="password" className=" modal__label">Password
                <input type="password" className="modal__input" id="password" placeholder='Password' value={password} onChange={handleChange} />
            </label>
            <button className="login_modal-button">or Sign up</button>

        </ModalWithForm>
    )

}

export default LoginModal