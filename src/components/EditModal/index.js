// src/components/EditModal/EditModal.jsx
import React, { useState } from 'react';
import styles from './EditModal.module.css';

const EditModal = ({ show, onClose, onSave, card }) => {
    const [title, setTitle] = useState(card.title);
    const [category, setCategory] = useState(card.category);
    const [image, setImage] = useState(card.image);
    const [link, setLink] = useState(card.link);  // Cambiado de video a link

    const handleSave = () => {
        onSave({
            ...card,
            title,
            category,
            image,
            link,  // Cambiado de video a link
        });
        onClose(); // Cerrar el modal después de guardar
    };

    const handleClear = () => {
        setTitle('');
        setCategory('');
        setImage('');
        setLink('');  // Cambiado de video a link
    };

    if (!show) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <h2>EDITAR:</h2>
                <form>
                    <label>
                        Título:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="agrega nombre de tu contenido favorito"
                            required
                        />
                    </label>
                    <label>
                        Categoría:
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="peliculas">Película</option>
                            <option value="series">Serie</option>
                            <option value="documentales">Documental</option>
                        </select>
                    </label>
                    <label>
                        Imagen:
                        <input
                            type="url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="agrega un enlace web de la imagen de tu contenido elegido"
                            required
                        />
                    </label>
                    <label>
                        Video:
                        <input
                            type="url"
                            value={link}  
                            onChange={(e) => setLink(e.target.value)} 
                            placeholder="agrega el enlace de video de tu contenido elegido"
                            required
                        />
                    </label>
                    <div className={styles.actions}>
                    <button type="button" className={styles.primary} onClick={handleSave}>GUARDAR</button>
                    <button type="button" className={styles.secondary} onClick={handleClear}>LIMPIAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;


