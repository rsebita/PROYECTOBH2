import React from 'react';
import './index.css';
import Jugador from './components/Tarjet.js';
import Navbar from './components/Navbar.jsx';
import History from './components/history.js';
import bulbasaur2 from './assets/bulbasaur2.png';
import ImageSliderPhotos from './components/Sliderphotos.js';
import ContactCard from './components/ContactCard.js';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {


  const jugadores = [

    {
      nombre: "Rodrigo Soto",
      imagen: bulbasaur2,
      descripcion: "Director Técnico."
    },
    {
      nombre: "Danilo Henriquez",
      imagen: bulbasaur2,
      descripcion: "Arquero."
    },
    {
      nombre: "Cristian Eduardo",
      imagen: bulbasaur2,
      descripcion: "Arquero."
    },
    {
      nombre: "Tomas Bustamante",
      imagen: bulbasaur2,
      descripcion: "Defensa central."
    },
    {
      nombre: "Thomas Peters",
      imagen: bulbasaur2,
      descripcion: "Defensa central."
    },
    {
      nombre: "Alan Alcantara",
      imagen: bulbasaur2,
      descripcion: "Defensa central."
    },
    {
      nombre: "Byron Cerda",
      imagen: bulbasaur2,
      descripcion: "Defensa central."
    },
    {
      nombre: "Roberto Fernandez",
      imagen: bulbasaur2,
      descripcion: "Medicampista defensivo."
    },

    {
      nombre: "Claudio Díaz",
      imagen: bulbasaur2,
      descripcion: "Banca indiscutible."
    },
    {
      nombre: "Sebastián Ramírez",
      imagen: bulbasaur2,
      descripcion: "Crack."
    },
    {
      nombre: "Andrés Figueroa",
      imagen: bulbasaur2,
      descripcion: "Medio ofensivo."
    },
    {
      nombre: "Francisco Guzmán",
      imagen: bulbasaur2,
      descripcion: "Mediocampista mixto."
    },
    {
      nombre: "Rodrigo Flores",
      imagen: bulbasaur2,
      descripcion: "Delantero."
    },
    {
      nombre: "César Ángulo",
      imagen: bulbasaur2,
      descripcion: "Delantero."
    },
    {
      nombre: "Luciano Díaz",
      imagen: bulbasaur2,
      descripcion: "Delantero."
    },
    {
      nombre: "Fabrizzio Valladares",
      imagen: bulbasaur2,
      descripcion: "Delantero."
    }
  ];
  
  const CalendarioSlider = ({ jugadores = [] }) => {
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [tooltipVisible, setTooltipVisible] = useState(false); // Estado para controlar el tooltip
  
    const handleFechaClick = (fecha, jugador) => {
      setFechaSeleccionada({ fecha, jugador });
    };
  
    const meses = [
      { nombre: "Enero", dias: 31 },
      { nombre: "Febrero", dias: 28 },
      { nombre: "Marzo", dias: 31 },
      { nombre: "Abril", dias: 30 },
      { nombre: "Mayo", dias: 31 },
      { nombre: "Junio", dias: 30 },
      { nombre: "Julio", dias: 31 },
      { nombre: "Agosto", dias: 31 },
      { nombre: "Septiembre", dias: 30 },
      { nombre: "Octubre", dias: 31 },
      { nombre: "Noviembre", dias: 30 },
      { nombre: "Diciembre", dias: 31 },
    ];
  
    return (
      <div className="calendario-slider">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {meses.map((mes, index) => (
            <SwiperSlide key={index}>
              <div className="mes">
                <h3>{mes.nombre}</h3>
                <div className="dias-container">
                  {Array.from({ length: mes.dias }, (_, i) => {
                    const dia = i + 1;
                    const jugadorCumple = jugadores.find(
                      (jugador) =>
                        jugador.cumpleanos === `${dia}/${index + 1}` // Formato: día/mes
                    );
                    const esDanilo = jugadorCumple?.nombre === "Danilo Henriquez"; // Verifica si es Danilo
                    const es11Enero = dia === 11 && index === 0; // Verifica si es el 11 de enero
  
                    return (
                      <div
                        key={dia}
                        className={`dia ${esDanilo ? "danilo" : ""} ${
                          jugadorCumple ? "destacado" : ""
                        } ${es11Enero ? "once-enero" : ""}`} // Agrega la clase para el 11 de enero
                        onClick={() => {
                          if (es11Enero) {
                            setTooltipVisible(!tooltipVisible); // Muestra/oculta el tooltip al hacer clic
                          }
                          jugadorCumple &&
                            handleFechaClick(`${dia}/${index + 1}`, jugadorCumple.nombre);
                        }}
                        onMouseEnter={() => es11Enero && setTooltipVisible(true)} // Muestra el tooltip al pasar el cursor
                        onMouseLeave={() => es11Enero && setTooltipVisible(false)} // Oculta el tooltip al quitar el cursor
                      >
                        {dia}
                        {esDanilo && <span className="icono-cumpleanos">🎉</span>} {/* Icono de cumpleaños */}
                        {jugadorCumple && <span className="punto"></span>}
                        {es11Enero && tooltipVisible && (
                          <div className="tooltip">
                            Danilo Henriquez
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {fechaSeleccionada && (
          <div className="mensaje-cumpleanos">
            <p>
              {fechaSeleccionada.fecha} es el cumpleaños de{" "}
              {fechaSeleccionada.jugador}.
            </p>
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <header className="app-header"></header>
      <div className="equipo-container">
          {jugadores.map((jugador, index) => (
            <Jugador
              key={index}
              nombre={jugador.nombre}
              imagen={jugador.imagen}
              descripcion={jugador.descripcion}
              numeroCamiseta={jugador.numeroCamiseta}/>
          ))}
      </div>
      <div className="frame-container">
        <div className="layout-container">
          <div className="left-section">
            <History/>
          </div>
            <div className="right-section">
              <div className="top-right">
                <ImageSliderPhotos />
              </div>
              <div className="bottom-right">
                <ContactCard />
              </div>
            </div>
        </div>
      </div>   
      <CalendarioSlider />    
    </div>
  );
}

export default App;