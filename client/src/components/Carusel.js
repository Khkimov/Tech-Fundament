import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../assets/foundation/zaglublenniy-fundament.png';
import img2 from '../assets/foundation/svayno-rastverkovy.jpg';

const Carusel = () => {
  return(
    <Carousel>
      <Carousel.Item style={{width: '300px', height: '300px'}}>
        <img
          className="d-block w-30"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width: '300px', height: '300px'}}>
        <img
          className="d-block w-30"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carusel;
