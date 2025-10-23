import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logoUrl from '../../../assets/images/logo.jpg';
import { FiSearch } from 'react-icons/fi';

const Header = ({ onLoginClick }) => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <a href="/" className={styles.logoLink}>
            <img src={logoUrl} alt="YUTU Studio Logo" className={styles.logoImage} />
          </a>
          <nav className={styles.navigation}>
            <NavLink to="/originals" className={getNavLinkClass}>ORIGINALS</NavLink>
            <NavLink to="/categories" className={getNavLinkClass}>CATEGORIES</NavLink>
            <NavLink to="/rankings" className={getNavLinkClass}>RANKINGS</NavLink>
            <NavLink to="/canvas" className={getNavLinkClass}>CANVAS</NavLink>
          </nav>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.subLinks}>
            <a href="/shop" className={styles.subLink}>WEBTOON SHOP</a>
            <a href="/creators" className={styles.subLink}>Creators 101</a>
          </div>
          <div className={styles.actions}>
            <button className={styles.publishButton}>Publish</button>
            <button className={styles.loginButton} onClick={onLoginClick}>Log In</button>
          </div>
          <button className={styles.searchButton}>
            <FiSearch size={22} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;