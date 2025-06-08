import './SideBar.css'
import avatar from "../../assets/avatar.svg"
function SideBar({handleEditProfileClick,handleLogOutClick}) {

    return (
        <>
            <div className="sidebar">
                <img className="sidebar__avatar" src={avatar} alt="Profile Avatar" />
                <p className="sidebar__username">Terrence Tegegne</p>
            </div>
            <div className='sidebar__btns'>
                <button onClick={handleEditProfileClick} className='sidebar__edit-profile-btn'>Change profile data</button>
                <button onClick={handleLogOutClick} className='sidebar__logout-btn'>Log out</button>
            </div>

        </>

    )

}

export default SideBar