import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);
    const [isHoursPopupOpen, setIsHoursPopupOpen] = useState(false);

    const openPopup = (popupSetter) => {
        popupSetter(true);
    };

    const closePopup = (popupSetter) => {
        popupSetter(false);
    };

    const handleClickOutside = (event, popupSetter) => {
        if (event.target.className === 'popup') {
            popupSetter(false);
        }
    };

    return (
        <div>
            <div className="contact">
                <ul>
                    <li>Site Web</li>
                    <li>Téléphone</li>
                    <li>Email</li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); openPopup(setIsAddressPopupOpen); }}>Adresse</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); openPopup(setIsHoursPopupOpen); }}>Horaire</a></li>
                </ul>
            </div>

            {isAddressPopupOpen && (
                <div id="address-popup" className="popup" onClick={(e) => handleClickOutside(e, setIsAddressPopupOpen)}>
                    <div className="popup-content">
                        <span className='close' onClick={() => closePopup(setIsAddressPopupOpen)}>&times;</span>
                        <h2>Adresse</h2>
                        <p>123 Rue Exemple, Ville, Pays</p>
                    </div>
                </div>
            )}

            {isHoursPopupOpen && (
                <div id="hours-popup" className="popup" onClick={(e) => handleClickOutside(e, setIsHoursPopupOpen)}>
                    <div className="popup-content">
                        <span className='close' onClick={() => closePopup(setIsHoursPopupOpen)}>&times;</span>
                        <h2>Horaire</h2>
                        <p>Lundi - Vendredi: 9h00 - 18h00</p>
                        <p>Samedi: 10h00 - 14h00</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;