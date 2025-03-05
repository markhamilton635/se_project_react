import "./AddItemModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useState } from "react";

function AddItemModal({ activeModal, onClose, isOpen }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [weather, setWeather] = useState("")


    const handleNameChange = (e) => { setName(e.target.value) }
    const handleImageChange = (e) => { setImage(e.target.value) }
    const handleWeatherChange = (e) => { setWeather(e.target.value) }

    return (
        <ModalWithForm title="New garmet" buttonText="Add garmet" activeModal={activeModal} isOpen={isOpen} onClose={onClose}>
            <label htmlFor="name" className="modal__label">Name
                <input type="text" className="modal__input" id="name" placeholder='Name' onChange={handleNameChange} value={name} />
            </label>
            <label htmlFor="imageUrl" className="modal__label">Image
                <input type="url" className="modal__input" id="imageUrl" placeholder='Image URL' onChange={handleImageChange} value={image} />
            </label>
            <fieldset className="modal__radio-buttons">
                <legend className="modal__legend">Select the weather type:</legend>
                <label htmlFor="hot" className="modal__label modal__label_type_radio">
                    <input id="hot" name="1" type="radio" className="modal__radio-input" value="hot" onChange={handleWeatherChange} checked={weather==="hot"}/> Hot
                </label>
                <label htmlFor="warm" className="modal__label modal__label_type_radio">
                    <input id="warm" name="1" type="radio" className="modal__radio-input" value="warm" onChange={handleWeatherChange} checked={weather==="warm"}/> Warm
                </label>
                <label htmlFor="cold" className="modal__label modal__label_type_radio">
                    <input id="cold" name="1" type="radio" className="modal__radio-input" value="cold" onChange={handleWeatherChange}checked={weather==="cold"}/> Cold
                </label>
            </fieldset>
        </ModalWithForm>
    )

}



export default AddItemModal