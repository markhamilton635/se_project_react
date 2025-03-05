import './WeatherCard.css'
import cloudy from "../../../assets/cloudy.svg"
import CurrentTemperatureUnitContext from '../../../contexts/CurrentTemperatureUnitContext'
import { useContext } from 'react'

function WeatherCard({ weatherData }) {

    const { currentTemperatureUnit } = useContext(
        CurrentTemperatureUnitContext
    );

    return (
        <section className="weather-card">
            <p className="weather-card__temp">
                {weatherData.temp[currentTemperatureUnit]} °{currentTemperatureUnit}
            </p>
            <img src={cloudy} alt="cloudy" className="weather-card__image" />

        </section>
    )
}

export default WeatherCard