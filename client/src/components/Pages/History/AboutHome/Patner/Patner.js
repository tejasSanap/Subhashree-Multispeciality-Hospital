import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "./Patner.css"

const Patner = () => {
  var settings = {
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }

  const imgArray = [
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/3-1.png",
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/7-1.png",
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/5-1.png",
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/3-1.png",
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/1-1.png",
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/5-1.png",
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/3-1.png",
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/7-1.png",
    "https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/4-1.png",
  ]

  return (
    <Container className='padding-container slider-patner'>
      <Slider {...settings}>

        {
          imgArray.map(item => (
            <img className='img-fluid patner-img' src={item} alt="" />
          ))
        }


      </Slider>
    </Container>
  );
};

export default Patner;