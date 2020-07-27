import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// assets
import "../assets/Services.scss";
import air1 from "../imgs/services/air1.png";
import air2 from "../imgs/services/air2.png";
import air3 from "../imgs/services/air3.png";
import air4 from "../imgs/services/air4.png";
import air5 from "../imgs/services/air5.png";

import car1 from "../imgs/services/car1.png";
import car2 from "../imgs/services/car2.png";
import car3 from "../imgs/services/car3.png";
import car4 from "../imgs/services/car4.png";
import car5 from "../imgs/services/car5.png";

import domestic1 from "../imgs/services/domestic1.png";
import domestic2 from "../imgs/services/domestic2.png";
import domestic3 from "../imgs/services/domestic3.png";
import domestic4 from "../imgs/services/domestic4.png";
import domestic5 from "../imgs/services/domestic5.png";

import freight1 from "../imgs/services/freight1.png";
import freight2 from "../imgs/services/freight2.png";
import freight3 from "../imgs/services/freight3.png";
import freight4 from "../imgs/services/freight4.png";
import freight5 from "../imgs/services/freight5.png";

import ocean1 from "../imgs/services/ocean1.png";
import ocean2 from "../imgs/services/ocean2.png";
import ocean3 from "../imgs/services/ocean3.png";
import ocean4 from "../imgs/services/ocean4.png";
import ocean5 from "../imgs/services/ocean5.png";

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        {/* <div className="services-watermark">SERVICES</div> */}
        <h1>SERVICES</h1>
        <div className="services-row">
          <div className="services-row-item">
            <Carousel
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop
              interval={2000}
              stopOnHover={false}
            >
              <div>
                <img src={air1} />
              </div>
              <div>
                <img src={air2} />
              </div>
              <div>
                <img src={air3} />
              </div>
              <div>
                <img src={air4} />
              </div>
              <div>
                <img src={air5} />
              </div>
            </Carousel>
            <h3>Air Freight Services</h3>
            <p>
              We offer Air freight services with the flexibility to meet your
              changing needs.
            </p>
          </div>
          <div className="services-row-item">
            <Carousel
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop
              interval={2000}
              stopOnHover={false}
            >
              <div>
                <img src={ocean1} />
              </div>
              <div>
                <img src={ocean2} />
              </div>
              <div>
                <img src={ocean3} />
              </div>
              <div>
                <img src={ocean4} />
              </div>
              <div>
                <img src={ocean5} />
              </div>
            </Carousel>
            <h3>Ocean</h3>
            <p>
              We have experienced personnel with professional equipment systems.
            </p>
          </div>
          <div className="services-row-item">
            <Carousel
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop
              interval={2000}
              stopOnHover={false}
            >
              <div>
                <img src={freight1} />
              </div>
              <div>
                <img src={freight2} />
              </div>
              <div>
                <img src={freight3} />
              </div>
              <div>
                <img src={freight4} />
              </div>
              <div>
                <img src={freight5} />
              </div>
            </Carousel>
            <h3>Freight Forwarding</h3>
            <p>
              We offer freight forwarding by organizing shipments for companies
              and individuals.
            </p>
          </div>
          <div className="services-row-item">
            <Carousel
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop
              interval={2000}
              stopOnHover={false}
            >
              <div>
                <img src={domestic1} />
              </div>
              <div>
                <img src={domestic2} />
              </div>
              <div>
                <img src={domestic3} />
              </div>
              <div>
                <img src={domestic4} />
              </div>
              <div>
                <img src={domestic5} />
              </div>
            </Carousel>
            <h3>Domestic Freight & Shipping</h3>
            <p>We provide reliable Domestic Household Goods Pickup Services.</p>
          </div>
          <div className="services-row-item">
            <Carousel
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop
              interval={2000}
              stopOnHover={false}
            >
              <div>
                <img src={car1} />
              </div>
              <div>
                <img src={car2} />
              </div>
              <div>
                <img src={car3} />
              </div>
              <div>
                <img src={car4} />
              </div>
              <div>
                <img src={car5} />
              </div>
            </Carousel>
            <h3>Used & New Cars</h3>
            <p>
              We offer freight forwarding by organizing shipments for companies
              and individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
