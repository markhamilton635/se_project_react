import { useEffect, useState } from 'react';
import './App.css'
import { coordinates, APIkey, defaultClothingItems } from '../../utils/constants';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import ItemModal from '../ItemModal/ItemModal';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import AddItemModal from '../AddItemModal/AddItemModal';




function App() {
    const [weatherData, setWeatherData] = useState({
        type: "",
        temp: { F: 999, C: 999 },
        city: "",
        condition: "",
        isDay: true,
    });
    const [activeModal, setActiveModal] = useState("");
    const [selectedCard, setSelectedCard] = useState({});
    const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
    const [clothingItems, setClothingItems] = useState(defaultClothingItems);



    const handleToggleSwitchChange = () => {
        setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
    }


    const handleCardClick = (card) => {
        setActiveModal("preview");
        setSelectedCard(card);

    }

    const handleAddClick = () => {
        setActiveModal("add-garment")
    }
    const closeActiveModal = () => {
        setActiveModal("");
    }

    const handleAddItemModalSubmit = ({name, image, weather}) => {
        //close modal
        //update clothingItems array
        setClothingItems([{name, link: image, weather}, ...clothingItems]);
        closeActiveModal();
        
    }

    useEffect(() => {
        getWeather(coordinates, APIkey)
            .then((data) => {
                const filteredData = filterWeatherData(data);
                setWeatherData(filteredData)
            })
            .catch(console.error);
    }, []);

    return (
        <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
            <div className="page">
                <div className="page__content">
                    <Header handleAddClick={handleAddClick} weatherData={weatherData} />
                    <Main weatherData={weatherData} handleCardClick={handleCardClick} clothingItems={clothingItems} />
                    <Footer />
                </div>
                <AddItemModal activeModal={activeModal} isOpen={activeModal === "add-garment"} onClose={closeActiveModal} onAddItemModalSubmit={handleAddItemModalSubmit} />
                <ItemModal activeModal={activeModal} card={selectedCard} onClose={closeActiveModal} />
            </div>
        </CurrentTemperatureUnitContext.Provider>
    )
}

export default App
