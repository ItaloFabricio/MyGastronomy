import styles from "./navbar.module.css";
import { LuShoppingCart, LuUserCircle, LuMenu } from "react-icons/lu";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const authData = JSON.parse(localStorage.getItem('auth'));
  const firstName = authData?.user?.fullname.split(' ')[0];

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    
  }, [authData])

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarItems}>
        <Link to={'/'}>
          <img className={styles.logo} src="/imgs/logo-my-gastronomy.png" alt="" />
        </Link>

        <div className={styles.navbarLinksContainer}>
          <Link to={'/'} className={styles.navbarLink}>
            Home
          </Link>
          <Link to={'/plates'} className={styles.navbarLink}>
            Plates
          </Link>
          <Link to={'/cart'}>
            <LuShoppingCart className={styles.navbarLink} />
          </Link>
          <Link to={'/profile'} className={styles.navbarLinkProfile}>
            <LuUserCircle className={styles.navbarLink} />
            <p>{firstName}</p>
          </Link>
          
        </div>
      </div>

      <div className={styles.mobileNavbarItems}>
        <Link to={'/'}>
          <img className={styles.logo} src="/imgs/logo.png" alt="" />
        </Link>
        <div className={styles.mobileNavbarBtns}>
          <Link to={'/cart'}>
            <LuShoppingCart className={styles.navbarLink} />
          </Link>
          <LuMenu className={styles.navbarLink} onClick={handleOpenMenu} />
        </div>
      </div>

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={handleOpenMenu}
        
      >
        <div className={styles.drawer}>
          <Link to={'/'} onClick={handleOpenMenu}>
            <a href="" className={styles.navbarLink}>Home</a>
          </Link>
          <Link to={'/plates'} onClick={handleOpenMenu}>
            <a href="" className={styles.navbarLink}>Plates</a>
          </Link>
          <Link to={'/profile'} onClick={handleOpenMenu}>
            <a href="" className={styles.navbarLink}>Perfil</a>
          </Link>
        </div>
      </Drawer>
    </nav>
  );
}
