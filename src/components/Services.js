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
                <img alt="kmg-service" src={air1} />
              </div>
              <div>
                <img alt="kmg-service" src={air2} />
              </div>
              <div>
                <img alt="kmg-service" src={air3} />
              </div>
              <div>
                <img alt="kmg-service" src={air4} />
              </div>
              <div>
                <img alt="kmg-service" src={air5} />
              </div>
            </Carousel>
            <h3>Air Freight Services</h3>
            <p>
              KMG Global LLC has strategic partnership agreements with a wide
              number of air operators. Due to trust and experience we have
              developed throughout years, we are able to secure fast and
              cost-efficient air freight service to any part of the world, be
              that for smaller shipments on consolidation basis, as well as
              large volumes which require part or full charter flights. Among
              the equipment we have access to are such aircraft as B-777, B-747,
              A-300, IL-76, AN-12, etc.
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
                <img alt="kmg-service" src={ocean1} />
              </div>
              <div>
                <img alt="kmg-service" src={ocean2} />
              </div>
              <div>
                <img alt="kmg-service" src={ocean3} />
              </div>
              <div>
                <img alt="kmg-service" src={ocean4} />
              </div>
              <div>
                <img alt="kmg-service" src={ocean5} />
              </div>
            </Carousel>
            <h3>Ocean</h3>
            <p>
              Throughout years of operation we have developed close partnership
              with ocean operators which enables us to secure space and rates on
              major liners and their routes. We have a wide networks of cargo
              handling agents in CONUS ports as well as around the world, so
              that you do not have to worry about any details such as
              containerization and de-containerization, loading and offloading,
              pick-up and delivery, etc.
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
                <img alt="kmg-service" src={freight1} />
              </div>
              <div>
                <img alt="kmg-service" src={freight2} />
              </div>
              <div>
                <img alt="kmg-service" src={freight3} />
              </div>
              <div>
                <img alt="kmg-service" src={freight4} />
              </div>
              <div>
                <img alt="kmg-service" src={freight5} />
              </div>
            </Carousel>
            <h3>Surface Transportation</h3>
            <p>
              At KMG Global LLC we have access to a wide network of surface
              transportation operators around the world, be that all ranges of
              trucking equipment and/or railroad. Wherever is the destination of
              your cargo, we can get it there as fast as possible at the lowest
              rates available in the market.
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
                <img alt="kmg-service" src={domestic1} />
              </div>
              <div>
                <img alt="kmg-service" src={domestic2} />
              </div>
              <div>
                <img alt="kmg-service" src={domestic3} />
              </div>
              <div>
                <img alt="kmg-service" src={domestic4} />
              </div>
              <div>
                <img alt="kmg-service" src={domestic5} />
              </div>
            </Carousel>
            <h3>Domestic Freight & Shipping</h3>
            <p>
              For KMG Global LLC, one of the most covered geographic areas is
              CONUS. We have over 4,000 trucks constantly rotating around the
              cities and states of the country. Whatever cargo you have and
              whenever you need it to be picked up and/or delivered, we can find
              the best solution and provide the highest quality service.
            </p>
          </div>
          <div className="services-row-item">
            <a href="https://kmgglobalcom.godaddysites.com/">
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
                  <img alt="kmg-service" src={car1} />
                </div>
                <div>
                  <img alt="kmg-service" src={car2} />
                </div>
                <div>
                  <img alt="kmg-service" src={car3} />
                </div>
                <div>
                  <img alt="kmg-service" src={car4} />
                </div>
                <div>
                  <img alt="kmg-service" src={car5} />
                </div>
              </Carousel>
            </a>
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
