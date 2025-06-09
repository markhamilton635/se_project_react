import './ItemCard.css'
import darkLike from "../../../assets/darkLike.svg"
import like from "../../../assets/like.svg"
import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, isLoggedIn, onCardLike }) {
    const currentUser = useContext(CurrentUserContext)
    console.log(item)
    const handleCardClick = () => {
        onCardClick(item)
    }
    const isLiked = item.likes.some(id => id === currentUser._id);
    const itemLikeImage = isLiked ? darkLike : like;
    const itemLikeButtonClassName = isLoggedIn ? '' : 'card__like-hidden';

    return (
        <li className="card" >
            <div className='card__container'>
                <h2 className="card__name" >{item.name}

                </h2>
                <img onClick={onCardLike} className={itemLikeButtonClassName} alt="like image" src={itemLikeImage} />
            </div>

            <img onClick={handleCardClick} className="card__image" src={item.imageUrl} alt={item.name} />
        </li>
    )
}
export default ItemCard