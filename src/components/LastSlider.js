import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import '../index.css';

const CalendarioSlider = ({ jugadores }) => {
  // Estado para almacenar la fecha seleccionada
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  // Función para manejar el clic en una fecha
  const handleFechaClick = (fecha, jugador) => {
    setFechaSeleccionada({ fecha, jugador });
  };

  // Datos de ejemplo para el calendario (puedes modificarlo)
  const meses = [
    { nombre: "Enero", dias: 31 },
    { nombre: "Febrero", dias: 28 },
    { nombre: "Marzo", dias: 31 },
    // Agrega más meses...
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
                    (jugador) => jugador.cumpleanos === `${dia}/${index + 1}`
                  );
                  return (
                    <div
                      key={dia}
                      className={`dia ${jugadorCumple ? "destacado" : ""}`}
                      onClick={() =>
                        jugadorCumple &&
                        handleFechaClick(`${dia}/${index + 1}`, jugadorCumple.nombre)
                      }
                    >
                      {dia}
                      {jugadorCumple && <span className="punto"></span>}
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