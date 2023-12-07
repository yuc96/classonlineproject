import React, { useState } from 'react';
import '../assets/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const Nav=()=>{
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const toggleMenu = () => {
      setMostrarMenu(!mostrarMenu);
    };
    return(
        <>
            {/* Barra de navegación */}
            <nav>
                    <ul>
                    <li><a href="#about-us">Sobre nosotros</a></li>
                    <li><a href="#teachers">Profesores</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    </ul>
                    <ul >
                    <li><a href="#teachers">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    </ul>
            </nav>
            <button className="menuHamburguesa" style={{ backgroundColor: '#f0f0f0' }} onClick={toggleMenu}>
                    {mostrarMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
                  {/*contenthamburger */}  
            {mostrarMenu && (
            <div className="contenthamburger">
                <ul>
                    <li><a href="#about-us">Sobre nosotros</a></li>
                    <li><a href="#teachers">Profesores</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><a href="#teachers">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </div>
          )} 
        </>
        
    );
};

export default Nav;
