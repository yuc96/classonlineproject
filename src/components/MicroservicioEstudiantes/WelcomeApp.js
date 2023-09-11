import React from 'react';
import '../assets/Welcome.css'
const Welcome = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <nav>
        <ul>
          <li><a href="#about-us">Sobre nosotros</a></li>
          <li><a href="#teachers">Profesores</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <ul >
         <li><a href="#teachers">Login</a></li>
          <li><a href="#contact">Register</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div>
        <div className='infoApp'>
            <h1>LiveClass</h1>
            <h2>Tu Plataforma Educativa en Tiempo Real</h2>
            <div className='about'>
                <div className='aboutInfo'>
                    <p>LiveClass es una innovadora y completa plataforma educativa
                    que permite a profesores y estudiantes conectarse en tiempo 
                    real para impartir y tomar clases interactivas y en vivo.
                    Nuestra aplicación ofrece un entorno educativo colaborativo
                    diseñado para fomentar el aprendizaje efectivo y enriquecedor.
                    </p>
                    <button className="custom-button">¡Comienza ya con Nosotros!</button>
                </div>
                <div className='aboutImage'>
                    <p>Imagen Loquita Loquita</p>
                </div>
            </div>
        </div>
       

      </div>
      {/* Pie de página */}
      <footer>
        <div className="footer-content">
            <p>&copy; 2023
                Easy Learning. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
