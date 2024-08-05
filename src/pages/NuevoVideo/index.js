import React, { useState, useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecera from 'components/Cabecera/Cabecera';
import Pie from 'components/Pie';
import styles from './NuevoVideo.module.css';
import { useSearch } from "../../contexts/dataContext";




function NuevoVideo() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
    const navigate = useNavigate ();

    const { dataCards, addDataCard } = useSearch(); // Obtener funciones del contexto
    console.log("Dato context", dataCards);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Number(dataCards.cards.length + 1);
        console.log("dato numero", dataCards);
        addDataCard (
            {
                "id": id,
                "category": category,
                "image": image,
                "title": title,
                "link": link
            }
        )

        navigate("/");
    }

    return (
        <>
            <Cabecera />
            <div className={styles.formContainer}>
                <h1>Nuevo Video</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Agrega nombre de tu contenido favorito"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="category">Categoría</label>
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Selecciona una categoría</option>
                            <option value="peliculas">Película</option>
                            <option value="series">Serie</option>
                            <option value="documentales">Documental</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="image">Imagen</label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Agrega un enlace web de la imagen de tu contenido elegido"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="link">Video</label>
                        <input
                            type="url"
                            id="link"
                            name="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Agrega el enlace de video de tu contenido elegido"
                            required
                        />
                    </div>
                    <div className={styles.formActions}>
                        <button type="submit"className={styles.guardarButton}>GUARDAR</button>
                        <button type="reset" className={styles.limpiarButton} onClick={() => {
                            setTitle('');
                            setCategory('');
                            setImage('');
                            setLink('');
                        }}>LIMPIAR</button>
                    </div>
                </form>
            </div>
            <Pie />
        </>
    );
}

export default NuevoVideo;


