import './ItemCard.css'
import darkLike from "../../../assets/darkLike.svg"
import like from "../../../assets/like.svg"
function ItemCard({ item, onCardClick }) {

    const handleCardClick = () => {
        onCardClick(item)
    }
    console.log(darkLike);

    return (
        <li className="card" >
            <div className='card__container'>
                <h2 className="card__name" >{item.name}

                </h2>
                <img className='card__like' alt="like image" src={like} />
            </div>

            <img onClick={handleCardClick} className="card__image" src={item.imageUrl} alt={item.name} />
        </li>
    )
}
export default ItemCard