/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaSearchDollar } from 'react-icons/fa';
import { AiOutlineMoneyCollect } from 'react-icons/ai';
import { FaRegMoneyBillAlt, FaCashRegister } from 'react-icons/fa';
import {} from '../assets/css/discount.css';
import Wobble from 'react-reveal/Wobble';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Discount() {
  return (
    <div>
      <section className="slider">
        <Wobble>
          <h2>Promociones y más</h2>
        </Wobble>

        <div />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/1422408/pexels-photo-1422408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/7681081/pexels-photo-7681081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        </Carousel>
      </section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 m-4">
            <div className="card-wrapper">
              <div className="content">
                <div className="face-front z-depth-2">
                  <img
                    src="https://images.pexels.com/photos/5980865/pexels-photo-5980865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="rounded-circle m-2"
                    width="280px"
                    height="200px"
                    alt=""
                  />

                  <div className="card-body">
                    <h4 className="font-weight-bold"> Ultimas Promociones</h4>
                    <hr />
                    <button className="btn btn-dark ml-1">Conocer más</button>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat tenetur odio suscipit non
                    </p>
                  </div>
                </div>

                <div className="face-back z-depth-2">
                  <div className="card-body">
                    <h4 className="font-weight-bold">Acerca de</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat tenetur odio suscipit non
                    </p>
                    <hr />

                    <ul className="list-inline">
                      <li className="list-inline-item">
                        Inversiones
                        <div className="p-2 fa-lg fb-ic">
                          <FaSearchDollar color="blue" />
                        </div>
                      </li>
                      <li className="list-inline-item">
                        Beneficios
                        <div className="p-2 fa-lg tw-ic">
                          <AiOutlineMoneyCollect color="gold" />
                        </div>
                      </li>
                      <li className="list-inline-item">
                        Dolares.
                        <div className="p-2 fa-lg gplus-ic">
                          <FaRegMoneyBillAlt color="green" />
                        </div>
                      </li>
                      <li className="list-inline-item">
                        Innovacion
                        <div className="p-2 fa-lg li-ic">
                          <FaCashRegister color="grey" />
                        </div>
                      </li>
                    </ul>

                    <p>Consulte a nuestros especialistas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 m-4">
            <div className="card-wrapper">
              <div className="content">
                <div className="face-front z-depth-2">
                  <img
                    src="https://images.pexels.com/photos/321463/pexels-photo-321463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="rounded-circle m-2"
                    width="280px;"
                    height="200px"
                    alt=""
                  />

                  <div className="card-body">
                    <h4 className="font-weight-bold">Novedades</h4>
                    <hr />
                    <button className="btn btn-dark">Detalles</button>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat tenetur odio suscipit non
                    </p>
                  </div>
                </div>

                <div className="face-back z-depth-2">
                  <div className="card-body">
                    <h4 className="font-weight-bold">Acerca de</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat tenetur odio suscipit
                    </p>
                    <hr />

                    <ul className="list-inline">
                      <li className="list-inline-item">
                        {' '}
                        Inversiones
                        <a className="p-2 fa-lg fb-ic">
                          <FaSearchDollar
                            color="
                        blue"
                          />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        Beneficios
                        <a className="p-2 fa-lg tw-ic">
                          <AiOutlineMoneyCollect color="gold" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        Dolares.
                        <a className="p-2 fa-lg gplus-ic">
                          <FaRegMoneyBillAlt color="green" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        Innovacion
                        <a className="p-2 fa-lg li-ic">
                          <FaCashRegister color="grey" />
                        </a>
                      </li>
                    </ul>

                    <p>Consulte a nuestros especialistas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 m-4">
            <div className="card-wrapper">
              <div className="content">
                <div className="face-front z-depth-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hZ9jaNH-ux-jZxaqknZjMS8ExEziJhJoYQ&usqp=CAU"
                    className="rounded-circle m-2"
                    width="280px;"
                    height="200px"
                    alt=""
                  />

                  <div className="card-body">
                    <h4 className="font-weight-bold">Proximamente</h4>
                    <hr />
                    <button className="btn btn-dark">Sobre...</button>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat tenetur odio suscipit non
                    </p>
                  </div>
                </div>

                <div className="face-back z-depth-2">
                  <div className="card-body">
                    <h4 className="font-weight-bold">Acerca de</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat tenetur odio suscipit
                    </p>
                    <hr />

                    <ul className="list-inline">
                      <li className="list-inline-item">
                        {' '}
                        Inversiones
                        <div className="p-2 fa-lg fb-ic">
                          <FaSearchDollar color="blue" />
                        </div>
                      </li>
                      <li className="list-inline-item">
                        Beneficios
                        <a className="p-2 fa-lg tw-ic">
                          <AiOutlineMoneyCollect color="gold" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        Dolares.
                        <div className="p-2 fa-lg gplus-ic">
                          <FaRegMoneyBillAlt color="green" />
                        </div>
                      </li>
                      <li className="list-inline-item">
                        Innovacion
                        <a className="p-2 fa-lg li-ic">
                          <FaCashRegister color="grey" />
                        </a>
                      </li>
                    </ul>

                    <p>Consulte a nuestros especialistas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
