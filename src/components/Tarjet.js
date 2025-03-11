import React from 'react';
import '../index.css';


const Jugador = ({ nombre, imagen, descripcion}) => {
  return (
    <div className="jugador-card">
      <img src={imagen} alt={nombre} className="jugador-imagen" />
      <h2 className="jugador-nombre">{nombre}</h2>
      <p className="jugador-descripcion">{descripcion}</p>
    </div>
  );
};

export default Jugador;
