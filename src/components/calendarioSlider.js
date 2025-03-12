import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState } from "react";
import '../index.css';

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

export default CalendarioSlider;