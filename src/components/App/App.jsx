import { useEffect, useState } from 'react';
import './App.css'
import { coordinates, APIkey } from '../../utils/constants';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import ItemModal from '../ItemModal/ItemModal';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import AddItemModal from '../AddItemModal/AddItemModal';
import { Routes, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import { getItems, addItem, deleteItem } from '../../utils/api';




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
    const [clothingItems, setClothingItems] = useState([]);




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

    const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
        addItem(name, imageUrl, weather).then((newItem) => {
            setClothingItems((prevItems) => [...prevItems, newItem]);
            closeActiveModal();
        })
            .catch(console.error);
    }

    const handleDeleteCard = (id) => {
        deleteItem(id).then(() => {
            setClothingItems((prevItems) => prevItems.filter(item => item._id !== id));
            closeActiveModal();
        }).catch(console.error);
    }

    useEffect(() => {
        getWeather(coordinates, APIkey)
            .then((data) => {
                const filteredData = filterWeatherData(data);
                setWeatherData(filteredData)
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        getItems().then((data) => {
            setClothingItems(data)
        }).catch(console.error)
    }, []);


    return (
        <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
            <div className="page">
                <div className="page__content">
                    <Header handleAddClick={handleAddClick} weatherData={weatherData} />

                    <Routes>
                        <Route path='/' element={<Main handleDeleteCard={handleDeleteCard} weatherData={weatherData} handleCardClick={handleCardClick} clothingItems={clothingItems} />}></Route>
                        <Route path='/profile' element={<Profile handleAddClick={handleAddClick} handleDeleteCard={handleDeleteCard} handleCardClick={handleCardClick} clothingItems={clothingItems} />}></Route>
                    </Routes>





                </div>
                <Footer />
                <AddItemModal activeModal={activeModal} isOpen={activeModal === "add-garment"} onClose={closeActiveModal} onAddItemModalSubmit={handleAddItemModalSubmit} />
                <ItemModal onDeleteCard={handleDeleteCard} activeModal={activeModal} card={selectedCard} onClose={closeActiveModal} />
            </div>
        </CurrentTemperatureUnitContext.Provider>
    )
}

export default App
