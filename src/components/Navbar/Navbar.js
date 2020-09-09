import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import navbarRoutes from '../../routes/navbar.routes';
import './Navbar.scss';

Navbar.propTypes = {};

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const handleActive = (id) => {
    const activeClass = document.getElementById(id);
    const oldActiveClass = document.getElementsByClassName('nav-links-active');
    if (oldActiveClass.length) {
      oldActiveClass[0].className = 'nav-links';
    }
    activeClass.className = 'nav-links-active';
  };
  const handleDisableActive = () => {
    const oldActiveClass = document.getElementsByClassName('nav-links-active');
    if (oldActiveClass.length) {
      oldActiveClass[0].className = 'nav-links';
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            LDL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {navbarRoutes.map((item) => {
              return (
                <li className='nav-item'>
                  <Link
                    to={item.to}
                    className={item.className}
                    onClick={(closeMobileMenu, () => handleActive(item.id))}
                    id={item.id}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {button && (
            <Button buttonStyle='btn--outline' onClick={handleDisableActive}>
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
