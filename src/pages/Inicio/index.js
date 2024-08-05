import React from 'react';
import Cabecera from 'components/Cabecera/Cabecera';
import Pie from 'components/Pie';
import Categorias from 'components/Categorias';
import Banner from 'components/Banner';

function Inicio({ cards = [] }) {  // Default to empty array if cards is not provided
    // Verifica que cards sea un array
    const peliculas = Array.isArray(cards) ? cards.filter(card => card.category === 'peliculas') : [];
    const series = Array.isArray(cards) ? cards.filter(card => card.category === 'series') : [];
    const documentales = Array.isArray(cards) ? cards.filter(card => card.category === 'documentales') : [];

    const handleEdit = (id) => {
        console.log('Edit clicked', id);
    };

    const handleDelete = (id) => {
        console.log('Delete clicked', id);
    };

    return (
        <>
            <Cabecera />
            <Banner />
            <Categorias
                peliculas={peliculas}
                series={series}
                documentales={documentales}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <Pie />
        </>
    );
}

export default Inicio;




