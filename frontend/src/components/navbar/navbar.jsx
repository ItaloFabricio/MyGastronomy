import styles from "./navbar.module.css";
import { LuShoppingCart, LuUserCircle, LuMenu } from "react-icons/lu";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/useUserContext";
import authService from "../../services/auth";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, setUser } =  useUserContext();
  const [firstName, setFirstName] = useState('');
 

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };


  useEffect(() => {
    if (user?.user?.fullname) {
      setFirstName(user.user.fullname.split(' ')[0]);
    } else {
      setFirstName(''); 
    }
  }, [user]);
 

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
           {firstName}
          </Link>
          
        </div>
      </div>

      <div className={styles.mobileNavbarItems}>
        <Link to={'/'}>
          <img className={styles.logo} src="/imgs/logo-my-gastronomy.png" alt="" />
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
          <Link to={'/'} onClick={handleOpenMenu} className={styles.navbarLink}>
            Home
          </Link>
          <Link to={'/plates'} onClick={handleOpenMenu} className={styles.navbarLink}>
            Plates
          </Link>
          <Link to={'/profile'} onClick={handleOpenMenu} className={styles.navbarLink}>
            Perfil
          </Link>
        </div>
      </Drawer>
    </nav>
  );
}
