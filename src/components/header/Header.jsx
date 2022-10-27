import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.navbar_fixed}>
      <nav className={styles.navbar}>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={styles.navbar_ul}>
            <li
              className={`${styles.mobileView} ${styles.nav_item}  ${styles.icons} ${styles.menu} `}
            >
              <a href="#" className={styles.nav_link}>
                <span>Menu</span>
              </a>
            </li>
            <li
              className={`${styles.mobileView} ${styles.nav_item}  ${styles.icons} ${styles.Apple_Logo}`}
            >
              <a className={styles.nav_link} href="#">
                <span>Apple</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>Store</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>Mac</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>iPad</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>iPhone</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>Watch</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>AirPods</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>TV & Home</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>Only on Apple</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>Accessories</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#">
                <span>Support</span>
              </a>
            </li>
            <li className={styles.nav_item}>
              <a
                className={`${styles.nav_link} ${styles.icons}  ${styles.search}`}
                href="#"
              >
                <input className={styles.searchBar} type="search" />
                <span>Search</span>
              </a>
            </li>
            <li className={`${styles.mobileView} ${styles.nav_item} `}>
              <a
                className={`${styles.nav_link} ${styles.icons}  ${styles.Cart}`}
                href="#"
              >
                <span>Cart Page</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
