import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { MdPointOfSale, MdOutlineInventory } from 'react-icons/md';
import {} from '../assets/css/categories.css';
function Categories() {
  return (
    <div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4>
                <span>Categorias </span>y más!
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's
                <br />
                standard dummy text ever since the 1500s, when an unknown book.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {' '}
                <span className="icon feature_box_col_one">
                  <i className="fa fa-globe"></i>
                </span>
                <h6>Dashboard</h6>
                <p>
                  Incluye tarjetas con datos ,graficos diferentes cada uno en
                  una pestaña, para obtener mejor visualizacion
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {' '}
                <span className="icon feature_box_col_two">
                  {/*<i className="fa fa-anchor"></i>*/}
                  <BsPeople />
                </span>
                <h6>Clientes</h6>
                <p>
                  Incluye una lista de 100 clientes con sus datos
                  correspondientes y una paginacion para mejor visualización.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {' '}
                <span className="icon feature_box_col_three">
                  <i className="fa fa-hourglass-half"></i>
                </span>
                <h6>Colaboradores</h6>
                <p>
                  Incluye los datos personales y de contacto de los
                  contribuyentes de éste proyecto cada uno con su especialidad.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {' '}
                <span className="icon feature_box_col_four">
                  <i className="fa fa-database"></i>
                </span>
                <h6>Analytics</h6>
                <p>
                  Incluye grafico global para visualizar datos internacionales y
                  un grafico con multiples variables.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {' '}
                <span className="icon feature_box_col_five">
                  {/*<i className="fa fa-upload"></i>*/}
                  <MdPointOfSale />
                </span>
                <h6>Promociones</h6>
                <p>
                  Incluye carousel automatico con imagenes y tarjetas animadas
                  con las promociones.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {' '}
                <span className="icon feature_box_col_six">
                  {/*<i className="fa fa-camera"></i>*/}
                  <MdOutlineInventory />
                </span>
                <h6>Inventario</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen
                  bga state
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
