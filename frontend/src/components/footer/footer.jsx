import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <footer className={styles.footerContainer}>
            <img  src="/imgs/logo.png" alt="" />
            <div>
                <h2>Important Links</h2>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'/'}>Home</Link>
                    <Link className={styles.link} to={'/plates'}>Plates</Link>
                    <Link className={styles.link} to={'/profile'}>Profile</Link>
                </div>
            </div>
            <div>
                <p>Developed by  <a href="" target="_blank">Italo Fabrício.</a> </p>
            </div>
        </footer>
    )
}