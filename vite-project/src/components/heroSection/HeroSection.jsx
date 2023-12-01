import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = ['/catalogue/b1.jpg', '/catalogue/b2.jpg', '/catalogue/b3.jpg', '/catalogue/b4.jpg', '/catalogue/b5.jpg', '/catalogue/b6.jpg', '/catalogue/b7.jpg'];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Hero Image ${index + 1}`}
            style={{ width: '100%', maxHeight: '15cm', objectFit: 'cover' }}
          />
        </div>
      ))}
    </Slider>
  );
}

export default HeroSection;
