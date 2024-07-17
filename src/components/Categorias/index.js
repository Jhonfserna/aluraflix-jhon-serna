// src/components/Categorias/Categorias.jsx
import React, { useState, useEffect } from 'react';
import Tarjeta from '../Tarjeta/index';
import styles from './Categorias.module.css';
import data from '../../data/db.json';

const Categorias = () => {
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      console.log('Datos JSON:', data); // Verifica qué datos se están importando
      if (data && Array.isArray(data.cards)) {
        setCards(data.cards);
      } else {
        console.error('Error: data.cards no es un array');
      }
    }, []);


  
    const handleDelete = (id) => {
      setCards(cards.filter(card => card.id !== id));
    };
  
    const handleSave = (updatedCard) => {
      setCards(cards.map(card => (card.id === updatedCard.id ? updatedCard : card)));
    };
  
    const categorias = ['peliculas', 'series', 'documentales'];
  
    return (
      <div className={styles.categoriasContainer}>
        {categorias.map(categoria => (
          <div key={categoria} className={styles.categoria}>
            <h2 className={`${styles.categoriaTitle} ${styles[categoria]}`}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </h2>
            <div className={styles.cardContainer}>
              {cards.filter(card => card.category === categoria).map(card => (
                <Tarjeta
                  key={card.id}
                  card={card}
                  onDelete={() => handleDelete(card.id)}
                  onSave={handleSave}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Categorias;


// const Categorias = ({ peliculas, series, documentales }) => {
//     return (
//         <div className={styles.categoriasContainer}>
//             <div className={styles.categoria}>
//                 <h2 className={`${styles.categoriaTitle} ${styles.peliculas}`}>PELÍCULAS</h2>
//                 <div className={styles.tarjetasContainer}>
//                     {peliculas.map((pelicula) => (
//                         <Tarjeta
//                             key={pelicula.id}
//                             image={pelicula.image}
//                             title={pelicula.title}
//                             link={pelicula.link}
//                             onEdit={pelicula.onEdit}
//                             onDelete={pelicula.onDelete}
//                             category="peliculas"
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div className={styles.categoria}>
//                 <h2 className={`${styles.categoriaTitle} ${styles.series}`}>SERIES</h2>
//                 <div className={styles.tarjetasContainer}>
//                     {series.map((serie) => (
//                         <Tarjeta
//                             key={serie.id}
//                             image={serie.image}
//                             title={serie.title}
//                             link={serie.link}
//                             onEdit={serie.onEdit}
//                             onDelete={serie.onDelete}
//                             category="series"
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div className={styles.categoria}>
//                 <h2 className={`${styles.categoriaTitle} ${styles.documentales}`}>DOCUMENTALES</h2>
//                 <div className={styles.tarjetasContainer}>
//                     {documentales.map((documental) => (
//                         <Tarjeta
//                             key={documental.id}
//                             image={documental.image}
//                             title={documental.title}
//                             link={documental.link}
//                             onEdit={documental.onEdit}
//                             onDelete={documental.onDelete}
//                             category="documentales"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Categorias;

