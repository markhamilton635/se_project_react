import './Main.css'
import WeatherCard from './WeatherCard/WeatherCard'
import ItemCard from './ItemCard/ItemCard'
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext'
import { useContext } from 'react'

function Main({ weatherData, handleCardClick, clothingItems, isLoggedIn, onCardLike }) {
    const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
    return (
        <main>
            <WeatherCard weatherData={weatherData} />
            <section className="cards">
                <p className="cards__text">Today is {weatherData.temp[currentTemperatureUnit]} °{currentTemperatureUnit} / You may want to wear:</p>
                <ul className="cards__list">
                    {clothingItems.filter((item) => {
                        return item.weather === weatherData.type;
                    }).map((item) => {
                        return (
                            <ItemCard onCardLike={onCardLike} key={item._id} isLoggedIn={isLoggedIn} item={item} onCardClick={handleCardClick} />
                        )
                    })}
                </ul>

            </section>

        </main>
    )
}

export default Main;