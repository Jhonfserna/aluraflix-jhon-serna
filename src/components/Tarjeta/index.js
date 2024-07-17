// src/components/Tarjeta/Tarjeta.jsx
import React, { useState } from 'react';
import styles from './Tarjeta.module.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditModal from "../EditModal/"; // Asegúrate de importar el componente EditModal correctamente

const Tarjeta = ({ card, onDelete, onSave }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = (updatedCard) => {
    onSave(updatedCard);
    setShowModal(false);
  };

  return (
    <>
      <div className={`${styles.card} ${styles[card.category]}`}>
        <a href={card.link} target="_blank" rel="noopener noreferrer" className={styles.card__link}>
          <div className={styles.card__imageContainer}>
            <img src={card.image} alt={card.title} className={styles.card__image} />
          </div>
        </a>
        <div className={styles.card__title}>{card.title}</div>
        <div className={styles.card__actions}>
          <button className={styles.card__actionButton} onClick={() => onDelete(card.id)}>
            Borrar <FaTrashAlt className={styles.icon} />
          </button>
          <button className={styles.card__actionButton} onClick={handleEdit}>
            Editar <FaEdit className={styles.icon} />
          </button>
        </div>
      </div>
      <EditModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        card={card}
      />
    </>
  );
};

export default Tarjeta;


// const Tarjeta = ({ image, title, link, onEdit, onDelete, category }) => {
//   return (
//     <div className={`${styles.card} ${styles[category]}`}>
//       <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card__link}>
//         <div className={styles.card__imageContainer}>
//           <img src={image} alt={title} className={styles.card__image} />
//         </div>
//       </a>
//       <div className={styles.card__title}>{title}</div>
//       <div className={styles.card__actions}>
//       <button className={styles.card__actionButton}>
//           Borrar <FaTrashAlt className={styles.icon} onClick={onDelete} />
//         </button>
//         <button className={styles.card__actionButton}>
//           Editar <FaEdit className={styles.icon} onClick={onEdit} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Tarjeta;


