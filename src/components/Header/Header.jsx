import './Header.css'
import logo from "../../assets/logo.svg"
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ handleAddClick, weatherData, isLoggedIn, handleSignUpClick, handleLoginClick }) {
    const currentUser = useContext(CurrentUserContext)
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    const avatarPlaceholder = (
        <div className="header__avatar-placeholder">
            {currentUser.name?.[0]?.toUpperCase() || "?"}
        </div>
    );

    return (
        <header className="header" >
            <Link to='/'>
                <img src={logo} alt="Logo" className="header__logo" />
            </Link>

            <p className="header__date-and-location">{currentDate}, {weatherData.city}</p>
            <ToggleSwitch />

            {isLoggedIn ? (

                <>
                    <button onClick={handleAddClick} type="button" className="header__add-clothes-btn">+ Add clothes</button>
                    <Link className='header__profile-link' to='/profile'>
                        <div className="header__user-container">
                            <p className="header__username">{currentUser.name || 'Current User'}</p>
                            {currentUser?.avatar ? (
                                <img
                                    src={currentUser.avatar}
                                    alt={currentUser.name || "current user"}
                                    className="header__avatar"
                                />
                            ) : (
                                avatarPlaceholder
                            )}
                        </div>
                    </Link>
                </>
            ) : (
                <>
                    <button onClick={handleSignUpClick} className='header__sign-up-btn'>Sign Up</button>
                    <button onClick={handleLoginClick} className='header__log-in-btn'>Log In</button>
                </>
            )}
        </header>
    )
}

export default Header
