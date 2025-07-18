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
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Profile from '../Profile/Profile';
import { getItems, addItem, deleteItem, getUserInfo, editProfileInfo, toggleCardLike } from '../../utils/api';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import ProtectedRoute from "../ProtectedRoute";
import { signup, signin } from '../../utils/auth';
import { setToken, getToken } from '../../utils/token';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import LogOutModal from '../LogOutModal/LogOutModal';




function App() {
    const [weatherData, setWeatherData] = useState({
        type: "",
        temp: { F: 999, C: 999 },
        city: "",
        condition: "",
        isDay: true,
    });


    // VARIABLES


    const [activeModal, setActiveModal] = useState("");
    const [selectedCard, setSelectedCard] = useState({});
    const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
    const [clothingItems, setClothingItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [currentUser, setCurrentUser] = useState({ name: "", avatar: "" })

    const navigate = useNavigate();
    const location = useLocation();

    const handleToggleSwitchChange = () => {
        setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
    }


    // HOOKS 


    useEffect(() => {
        const jwt = getToken();
        if (!jwt) {
            return;
        }
        getUserInfo(jwt)
            .then((userData) => {
                setIsLoggedIn(true);
                setCurrentUser(userData);

            })
            .catch(console.error);
    }, []);


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

    useEffect(() => {

        if (!activeModal) return;

        const handleEscClose = (e) => {
            if (e.key === "Escape") {
                closeActiveModal();
            }
        };

        document.addEventListener("keydown", handleEscClose);

        return () => {
            document.removeEventListener("keydown", handleEscClose);
        };
    }, [activeModal]);


    // APIs


    const handleEditProfile = ({ name, avatar }) => {
        const token = getToken();

        if (!token) {
            return;
        }

        editProfileInfo({ name, avatar, token }).then((res) => {
            setCurrentUser(res.data);
            closeActiveModal();
        }).catch(console.error);
    }


    const handleRegistration = ({
        email,
        password,
        name,
        avatar,
    }) => {

        signup(name, avatar, email, password)
            .then(() => {
                closeActiveModal();

            }).then(() => {
                handleLogin({ email, password })

            }
            ).then(() => { navigate("/profile") })
            .catch(console.error);

    };


    const handleLogin = ({ email, password }) => {
        if (!email || !password) {

            return Promise.reject("Missing credentials");
        }
        return signin({ email, password })
            .then((data) => {
                if (data.token) {
                    setToken(data.token)
                    setIsLoggedIn(true);
                    getUserInfo(data.token).then((userData) => {
                        setCurrentUser(userData)
                    })
                    const redirectPath = location.state?.from?.pathname || "/profile";
                    navigate(redirectPath);
                }
                closeActiveModal();
            })
            .catch(console.error);
    }


    const handleCardLike = (card, isLiked) => {
        const token = localStorage.getItem("jwt");
        const id = card._id

        toggleCardLike(id, isLiked, token)
            .then((updatedCard) => {
                setClothingItems((cards) =>
                    cards.map((item) => (item._id === id ? updatedCard : item))
                );
            })
            .catch((err) => console.log(err))

    };


    const handleAddItemModalSubmit = ({ name, imageUrl, weather, }) => {
        const jwt = getToken();
        if (!jwt) {
            return;
        }
        addItem(name, imageUrl, weather, jwt).then((newItem) => {
            setClothingItems((prevItems) => [newItem, ...prevItems]);
            closeActiveModal();
        })
            .catch(console.error);
    }


    const handleDeleteCard = (id,) => {
        const jwt = getToken();
        if (!jwt) {
            return;
        }
        deleteItem(id, jwt).then(() => {
            setClothingItems((prevItems) => prevItems.filter(item => item._id !== id));
            closeActiveModal();
        }).catch(console.error);
    }

    // HANDLE MODAL OPENING

    const handleCardClick = (card) => {
        setActiveModal("preview");
        setSelectedCard(card);
    }
    const handleLoginClick = () => {
        setActiveModal("log-in")
    }
    const handleSignUpClick = () => {
        setActiveModal("register")
    }
    const handleLogOutClick = () => {
        setActiveModal("log-out")
    }
    const handleEditProfileClick = () => {
        setActiveModal("edit-profile")
    }
    const handleAddClick = () => {
        setActiveModal("add-garment")
    }
    const closeActiveModal = () => {
        setActiveModal("");
    }






    return (
        <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    <div className="page__content">
                        <Header handleAddClick={handleAddClick} weatherData={weatherData} isLoggedIn={isLoggedIn} handleSignUpClick={handleSignUpClick} handleLoginClick={handleLoginClick} />

                        <Routes>
                            <Route path='/' element={<Main onCardLike={handleCardLike} isLoggedIn={isLoggedIn} handleDeleteCard={handleDeleteCard} weatherData={weatherData} handleCardClick={handleCardClick} clothingItems={clothingItems} />}></Route>

                            <Route path='/profile' element={
                                <ProtectedRoute isLoggedIn={isLoggedIn}>
                                    <Profile isLoggedIn={isLoggedIn} handleLogOutClick={handleLogOutClick} onClose={closeActiveModal} handleEditProfileClick={handleEditProfileClick} handleAddClick={handleAddClick} handleDeleteCard={handleDeleteCard} handleCardClick={handleCardClick} clothingItems={clothingItems} />
                                </ProtectedRoute>
                            }></Route>

                        </Routes>





                    </div>
                    <Footer />
                    <AddItemModal activeModal={activeModal} isOpen={activeModal === "add-garment"} onClose={closeActiveModal} onAddItemModalSubmit={handleAddItemModalSubmit} />
                    <ItemModal onDeleteCard={handleDeleteCard} activeModal={activeModal} card={selectedCard} onClose={closeActiveModal} />
                    <LoginModal handleSignUpClick={handleSignUpClick} activeModal={activeModal} isOpen={activeModal === "log-in"} handleLogin={handleLogin} onClose={closeActiveModal} />
                    <RegisterModal handleLoginClick={handleLoginClick} activeModal={activeModal} isOpen={activeModal === "register"} handleRegistration={handleRegistration} onClose={closeActiveModal} />
                    <EditProfileModal activeModal={activeModal} isOpen={activeModal === "edit-profile"} handleEditProfile={handleEditProfile} onClose={closeActiveModal} />
                    <LogOutModal setIsLoggedIn={setIsLoggedIn} activeModal={activeModal} isOpen={activeModal === "log-out"} onClose={closeActiveModal} />
                </div>
            </CurrentUserContext.Provider>
        </CurrentTemperatureUnitContext.Provider>
    )
}

export default App
