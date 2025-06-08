import "./EditProfileModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useEffect, useState } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfileModal({ activeModal, onClose, isOpen, handleEditProfile, }) {
  const currentUser = useContext(CurrentUserContext)


  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  useEffect(() => {

    setData({
      name: currentUser.name,
      avatar: currentUser.avatar
    })


  }, [currentUser]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    handleEditProfile(data);
    onClose();
  }

  return (
    <ModalWithForm title="Change profile data" buttonText="Save changes" activeModal={activeModal} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >
      <label htmlFor="name" className="modal__label">Name*
        <input type="text" className="modal__input" id="name" name="name" placeholder='Name' value={data.name} onChange={handleChange} />
      </label>
      <label htmlFor="avatar" className="modal__label">Avatar
        <input type="url" className="modal__input" id="avatar" name="avatar" placeholder='Image URL' value={data.avatar} onChange={handleChange} />
      </label>

    </ModalWithForm>
  )

}

export default EditProfileModal