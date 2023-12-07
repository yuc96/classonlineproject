import React from 'react';
import '../../assets/AboutCompanyCss/EasyFeatures.css';

const EasyFeatures = () => {
  return (
    <>
    <div className='content'>   
      <div className="welcome">
        <h2 className="question">¿CÓMO APRENDES CON EASYLEARNING?</h2>
        <p>TE DAMOS LAS HERRAMIENTAS PARA CRECER</p>
      </div>
      <div className='subcontent'>
        <div className="feature">
            <h3>ESTUDIA</h3>
            <p>Explora una amplia gama de recursos y herramientas educativas para reforzar tus conocimientos.</p>
        </div>
        <div className="feature">
            <h3>CONTACTA</h3>
            <p>Contacta con profesores de todo el mundo que hablen tu mismo idioma.</p>
        </div>
        <div className="feature">
            <h3>CLASES EN VIVO Y GRABADAS</h3>
            <p>Participa en clases en vivo y accede a grabaciones para repasar el contenido cuando lo necesites.</p>
        </div>
      </div>
 
    </div>
    </>
  );
};

export default EasyFeatures;
