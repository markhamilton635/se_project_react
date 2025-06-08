import './Profile.css'
import SideBar from '../SideBar/SideBar'
import ClothesSection from '../ClothesSection/ClothesSection'
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({ onClose, handleAddClick ,handleCardClick, clothingItems, handleEditProfileClick,handleLogOutClick}) {
     const currentUser = useContext(CurrentUserContext)
    return (

        <div className='profile'>
            <section className="profile__sidebar">
                <SideBar handleLogOutClick={handleLogOutClick} onClose={onClose} handleEditProfileClick={handleEditProfileClick}/>
            </section>
            <section className="profile__clothes-section">
                <ClothesSection handleAddClick={handleAddClick} handleCardClick={handleCardClick} clothingItems={clothingItems} />
            </section>
        </div>

    )
  

}


export default Profile
// .filter(item => item.owner === currentUser._id) add this to clothingitems passed to filter profile only to items owned by current user