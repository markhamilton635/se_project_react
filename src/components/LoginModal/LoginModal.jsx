import "./LoginModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useState } from "react";

function LoginModal({ activeModal, onClose, isOpen, handleLogin, handleSignUpClick }) {

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
    <ModalWithForm customButtonClass={"login__modal-submit-btn"} customContentClass={"login__modal-content"} title="Log in" buttonText="Log in" activeModal={activeModal} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >

      <label htmlFor="login-email" className="modal__label">Email
        <input autoComplete="current-email" type="email" className="modal__input" id="login-email" name="email" placeholder='Email' value={data.email} onChange={handleChange} />
      </label>
      <label htmlFor="login-password" className=" modal__label">Password
        <input autoComplete="current-password" type="password" className="modal__input" id="login-password" name="password" placeholder='Password' value={data.password} onChange={handleChange} />
      </label>
      <button onClick={handleSignUpClick} type="button" className="login_modal-button">or Sign up</button>

    </ModalWithForm>
  )

}

export default LoginModal