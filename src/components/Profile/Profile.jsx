import './Profile.css'
import SideBar from '../SideBar/SideBar'
import ClothesSection from '../ClothesSection/ClothesSection'

function Profile({ handleAddClick ,handleCardClick, clothingItems }) {
    return (

        <div className='profile'>
            <section className="profile__sidebar">
                <SideBar />
            </section>
            <section className="profile__clothes-section">
                <ClothesSection handleAddClick={handleAddClick} handleCardClick={handleCardClick} clothingItems={clothingItems} />
            </section>
        </div>

    )
  

}


export default Profile