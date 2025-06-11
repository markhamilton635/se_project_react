import './ClothesSection.css'
import ItemCard from '../Main/ItemCard/ItemCard'


function ClothesSection({ isLoggedIn, handleAddClick, handleCardClick, clothingItems }) {


    return (

        <div className='clothes-section'>
            <div className='clothes-section__button-container'>
                <p className='clothes-section__title'>Your items</p>
                <button onClick={handleAddClick} className='clothes-section__add-new-button'>+ Add new</button>
            </div>
            <div className="clothes-section__cards">
                <ul className="cards__list">
                    {clothingItems.map((item) => {
                        return (
                            <ItemCard isLoggedIn={isLoggedIn} key={item._id} item={item} onCardClick={handleCardClick} />
                        )
                    })}
                </ul>
            </div>
        </div>

    )

}

export default ClothesSection

