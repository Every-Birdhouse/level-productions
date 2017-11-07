import React from 'react';
// import classNames from 'classnames';
import Slider from 'react-slick';

import './style.css';

export default function ContactUs(className) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true
  };

  return (
    <div>
      <Slider {...settings}>
        <div><h1>1</h1></div>
        <div><h1>2</h1></div>
        <div><h1>3</h1></div>
        <div><h1>4</h1></div>
        <div><h1>5</h1></div>
        <div><h1>6</h1></div>
      </Slider>
    </div>
  )
}
