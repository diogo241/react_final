import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import styles from './style.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <header
      className={`${styles['header']} container container-fluid f-row f-justify-space pad-tb-s f-align-center`}
    >
      <div className="header__logo">
        <Link to={'/'}>
          <img src={logo} alt="logo" className={styles['logo']} />
        </Link>
      </div>
      <ul
        className={`${styles['header__navbar']} f-row gap-s ${
          isOpen ? `${styles['is-open']}` : ''
        }`}
      >
        <li className={`${styles['header__item']} text-m text-dark`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles['header__active']}`
                : `${styles['header__link']}`
            }
            to="/"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li className={`${styles['header__item']} text-m text-dark`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles['header__active']}`
                : `${styles['header__link']}`
            }
            to="/works"
            onClick={toggleMenu}
          >
            Works
          </NavLink>
        </li>
        <li className={`${styles['header__item']} text-m text-dark`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles['header__active']}`
                : `${styles['header__link']}`
            }
            to="/blog"
            onClick={toggleMenu}
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <span className={`${styles['toggle-icon']}`} onClick={toggleMenu}>
        <div
          className={`${
            isOpen ? `${styles['close']}` : `${styles['hamburger']}`
          }`}
        ></div>
      </span>
    </header>
  );
};
export default Header;
