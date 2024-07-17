import React from 'react';
import styles from './Banner.module.css';
import bannerImage from './banner.png';


function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
      <div className={styles.content}>
        <p className={styles.paragraph}>Esta web es el espacio ideal donde podrás almacenar todos tus contenidos audiovisuales favoritos y categorizarlos por generos para que estén siempre ordenados y encontrarlos muy facilmente.</p>        
      </div>
    </div>
  );
}

export default Banner;

