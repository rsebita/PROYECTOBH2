import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import equipo9 from '../assets/SilderPhotos/equipo9.jpeg';
import equipo7 from '../assets/SilderPhotos/equipo7.jpeg';
import equipo2 from '../assets/SilderPhotos/equipo2.jpeg';
import equipo3 from '../assets/SilderPhotos/equipo3.jpeg';
import equipo4 from '../assets/SilderPhotos/equipo4.jpeg';
import equipo6 from '../assets/SilderPhotos/equipo6.jpeg';
import equipo1 from '../assets/SilderPhotos/equipo1.jpeg';


const ImageSliderPhotos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const images = [
    {
      id: 1,
      url: equipo9,
      alt: 'Imagen 1'
    },
    {
      id: 2,
      url: equipo7,
      alt: 'Imagen 2'
    },
    {
      id: 3,
      url: equipo2,
      alt: 'Imagen 3'
    },
    {
      id: 4,
      url: equipo3,
      alt: 'Imagen 4'
    },
    {
      id: 5,
      url: equipo4,
      alt: 'Imagen 5'

    },
    {
      id: 5,
      url: equipo6,
      alt: 'Imagen 5'

    },
    {
      id: 5,
      url: equipo1,
      alt: 'Imagen 5'

    }
  ];

    return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id}>
            <img 
              src={image.url} 
              alt={image.alt}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSliderPhotos;