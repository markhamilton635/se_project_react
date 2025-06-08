import './SideBar.css'
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
function SideBar({ handleEditProfileClick, handleLogOutClick, }) {
    const currentUser = useContext(CurrentUserContext)

    return (
        <>
            <div className="sidebar">
                <img className="sidebar__avatar" src={currentUser.avatar || "User Avatar"} alt="Profile Avatar" />
                <p className="sidebar__username">{currentUser.name || "User Name"}</p>
            </div>
            <div className='sidebar__btns'>
                <button onClick={handleEditProfileClick} className='sidebar__edit-profile-btn'>Change profile data</button>
                <button onClick={handleLogOutClick} className='sidebar__logout-btn'>Log out</button>
            </div>

        </>

    )

}

export default SideBar