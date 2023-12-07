import React from 'react';
import '../../assets/AboutCompanyCss/Welcome.css'
import ImgStudy from '../../images/ImgEstudioW.png'
const Welcome = () => {
  return (
    <div>
      {/* Contenido principal */}
      <div>
        <div className='infoApp'>
            <h1>EasyLearning</h1>
            <h2>Tu Plataforma Educativa en Tiempo Real</h2>
            <div className='about'>
                <div className='aboutInfo'>
                    <p>
                      EasyLearning Aprende en tiempo real. Conecta, 
                      colabora y participa en clases interactivas 
                      con profesores y estudiantes.
                    </p>
                    <button className="custom-button">¡Comienza ya con Nosotros!</button>
                </div>
                <div className='aboutImage'>
                    <img src={ImgStudy} alt='imgStudent'></img>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
