import { useContext } from 'react';
import './ToggleSwitch.css';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

function ToggleSwitch() {

    const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
        CurrentTemperatureUnitContext
    );


    return (
        <label className="toggle-switch">
            <input onChange={handleToggleSwitchChange} type="checkbox" className="toggle-switch__checkbox" />
            <span className="toggle-switch__circle"></span>
            <span className={`toggle-switch__fahrenheit ${currentTemperatureUnit === "F"
                ? "toggle-switch_text-color_white"
                : ""
                }`}>F</span>
            <span className={`toggle-switch__celsius ${currentTemperatureUnit === "C"
                ? "toggle-switch_text-color_white"
                : ""
                }`}>C</span>
        </label>
    )
}











export default ToggleSwitch