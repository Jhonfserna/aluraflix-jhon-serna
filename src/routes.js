import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import NuevoVideo from 'pages/NuevoVideo';

function AppRoutes() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cards')
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleAddCard = (newCard) => {
        fetch('http://localhost:5000/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCard),
        })
            .then((response) => response.json())
            .then((data) => {
                setCards((prevCards) => [...prevCards, data]);
            })
            .catch((error) => console.error('Error adding card:', error));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio cards={cards} />} />
                <Route path="/nuevo-video" element={<NuevoVideo onAddCard={handleAddCard} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

