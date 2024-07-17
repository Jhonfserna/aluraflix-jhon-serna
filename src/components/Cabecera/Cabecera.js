import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./LogoMain.png"
import CabeceraLink from "components/CabeceraLink/CabeceraLink"


function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/> 
                </section>
            </Link>
            <nav className={styles.botonesCabecera}>
                <CabeceraLink url="/" className={styles.homeButton}>
                    HOME
                </CabeceraLink>
                <CabeceraLink url="/nuevo-video" className={styles.nuevoVideoButton}>
                    NUEVO VÍDEO
                </CabeceraLink>
            </nav>
        </header>
    )
}



export default Cabecera;