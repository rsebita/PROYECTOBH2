import React from 'react';
import './index.css';
import Jugador from './components/Tarjet.js';
import Navbar from './components/Navbar.jsx';
import History from './components/history.js';
import bulbasaur2 from './assets/bulbasaur2.png';
import ImageSliderPhotos from './components/Sliderphotos.js';
import ContactCard from './components/ContactCard.js';
import "swiper/css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Footer from './components/footer.js';
import { FaFutbol, FaShieldAlt, FaTshirt, FaHandPaper} from 'react-icons/fa';


function App() {

  const jugadores = [

    {
      nombre: "Rodrigo Soto",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Director Técnico. <FaFutbol size={20}/>
      </>
    },
    {
      nombre: "Danilo Henriquez",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Arquero. <FaHandPaper size={20} />
      </>
    },
    {
      nombre: "Cristian Eduardo",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Arquero. <FaHandPaper size={20} />
      </>
    },
    {
      nombre: "Tomas Bustamante",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Defensa. <FaShieldAlt size={20} />
      </>
    },
    {
      nombre: "Thomas Peters",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Defensa. <FaShieldAlt size={20} />
      </>
    },
    {
      nombre: "Alan Alcantara",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Defensa. <FaShieldAlt size={20} />
      </>
    },
    {
      nombre: "Byron Cerda",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Defensa. <FaShieldAlt size={20} />
      </>
    },
    {
      nombre: "Roberto Fernandez",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Mediocampo defensivo. <FaTshirt size={20} />
      </>
    },

    {
      nombre: "Claudio Díaz",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Banca indiscutible. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "Sebastián Ramírez",
      imagen: bulbasaur2,
      descripcion: 
      <>
        crack. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "Andrés Figueroa",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Mediocampo mixto. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "Francisco Guzmán",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Mediocampo mixto. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "Rodrigo Flores",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Mediocampo mixto. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "César Ángulo",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Delantero. <FaFutbol size={20} />
      </>
    },
    {
      nombre: "Luciano Díaz",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Delantero. <FaFutbol size={20} />
      </>
    },
    {
      nombre: "Fabrizzio Valladares",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Delantero. <FaFutbol size={20} />
      </>
    }
  ];
  

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <header className="app-header"></header>
      <div className="equipo-container">
        {jugadores.map((jugador, index) => (
          <Jugador
            key={index}
            nombre={jugador.nombre}
            imagen={jugador.imagen}
            descripcion={jugador.descripcion}
            numeroCamiseta={jugador.numeroCamiseta} />
        ))}
      </div>
      <p className='bhfc'>
        La <span className='amistad'>amistad</span> siempre invicta...
      </p>

      <div className="frame-container">
        <div className="layout-container">
          <div id="historia" className="left-section">
            <History />
          </div>
          <div className="right-section">
            <div className="top-right">
              <ImageSliderPhotos />
            </div>
            <div id="contacto" className="bottom-right">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
      <calendarioSlider />
      <Footer/>
    </div>
      
  );
}

export default App;