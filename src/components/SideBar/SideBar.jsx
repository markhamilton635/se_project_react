import './SideBar.css'
import avatar from "../../assets/avatar.svg"
function SideBar({handleEditProfileClick, onClose}) {

    return (
        <>
            <div className="sidebar">
                <img className="sidebar__avatar" src={avatar} alt="Profile Avatar" />
                <p className="sidebar__username">Terrence Tegegne</p>
            </div>
            <div className='sidebar__btns'>
                <button onClose={onClose} onClick={handleEditProfileClick} className='sidebar__edit-profile-btn'>Change profile data</button>
                <button className='sidebar__logout-btn'>Log out</button>
            </div>

        </>

    )

}

export default SideBar