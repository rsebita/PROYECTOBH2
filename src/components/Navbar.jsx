import React from 'react'
import '../index.css';

const Navbar = () => {
  return (
    <header className="header">   
            <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#historia">Historia</a>
            <a href="#eventos">Eventos</a>
            <a href="#contacto">Contacto</a>
            </nav>
    </header>
  )
}

export default Navbar