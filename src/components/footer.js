import React from 'react';
import '../index.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2021 Bulberhampton FC. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://instagram.com/bulberhamptonfc/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
