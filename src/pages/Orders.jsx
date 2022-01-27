import React from 'react';
import {} from '../assets/css/orders.css';
import { FcPaid, FcExpired } from 'react-icons/fc';
function Orders() {
  return (
    <div>
      <div className="container mt-5 px-3">
        <div className="mb-2 d-flex justify-content-between align-items-center">
          <div className="position-relative">
            {' '}
            <span className="position-absolute search">
              <i className="fa fa-search"></i>
            </span>{' '}
            <input
              className="form-control w-100"
              placeholder="Buscar por Nr#, nombre..."
            />{' '}
          </div>
          <div className="px-2">
            {' '}
            <span>
              Filtro <i className="fa fa-angle-down"></i>
            </span>{' '}
            <i className="fa fa-ellipsis-h ms-3"></i>{' '}
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-responsive table-borderless">
            <thead>
              <tr className="bg-light">
                <th scope="col" width="5%">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col" width="5%">
                  #
                </th>
                <th scope="col" width="18%">
                  Fecha
                </th>
                <th scope="col" width="14%">
                  Status
                </th>
                <th scope="col" width="25%">
                  Cliente
                </th>
                <th scope="col" width="18%">
                  Compra
                </th>
                <th scope="col" className="text-end" width="20%">
                  <span>Precio</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>12</td>
                <td>1 Oct, 21</td>
                <td>
                  <FcPaid />

                  <span className="ms-1">Pagado</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/VKOeFyS.png"
                    width="25"
                    alt=""
                  />{' '}
                  Diego Perez
                </td>
                <td>Promoción de verano</td>
                <td className="text-end">
                  <span className="fw-bolder">$8952</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>14</td>
                <td>12 Oct, 21</td>
                <td>
                  <FcExpired />
                  <i className="fa fa-dot-circle-o text-danger"></i>
                  <span className="ms-1">Error</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/nmnmfGv.png"
                    width="25"
                    alt=""
                  />{' '}
                  Tomo arvis
                </td>
                <td>Iphone X</td>
                <td className="text-end">
                  <span className="fw-bolder">$0.19</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>17</td>
                <td>1 Nov, 21</td>
                <td>
                  <FcPaid />

                  <span className="ms-1">Pagado</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/VKOeFyS.png"
                    width="25"
                    alt=""
                  />{' '}
                  Althan Travis
                </td>
                <td>Apple Macbook air</td>
                <td className="text-end">
                  <span className="fw-bolder">$1.99</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>90</td>
                <td>19 Oct, 21</td>
                <td>
                  <FcPaid />

                  <span className="ms-1">Pagado</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/VKOeFyS.png"
                    width="25"
                    alt=""
                  />{' '}
                  Travis head
                </td>
                <td>Apple Macbook Pro</td>
                <td className="text-end">
                  <span className="fw-bolder">$9.99</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>12</td>
                <td>1 Oct, 21</td>
                <td>
                  <FcPaid />

                  <span className="ms-1">Pagado</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/nmnmfGv.png"
                    width="25"
                    alt=""
                  />{' '}
                  Althan Travis
                </td>
                <td>Suscripcion figma</td>
                <td className="text-end">
                  <span className="fw-bolder">$0.99</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>29</td>
                <td>1 Oct, 21</td>
                <td>
                  <FcPaid />

                  <span className="ms-1">Pagado</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/nmnmfGv.png"
                    width="25"
                    alt=""
                  />{' '}
                  Althan Travis
                </td>
                <td>Suscripción figma</td>
                <td className="text-end">
                  <span className="fw-bolder">$0.99</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>36</td>
                <td>10 Oct, 21</td>
                <td>
                  <FcExpired />
                  <span className="ms-1">Error</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/VKOeFyS.png"
                    width="25"
                    alt=""
                  />{' '}
                  Althan Travis
                </td>
                <td>Suscripción figma</td>
                <td className="text-end">
                  <span className="fw-bolder">$0.99</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>42</td>
                <td>15 Oct, 21</td>
                <td>
                  <FcPaid />

                  <span className="ms-1">Pagado</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/nmnmfGv.png"
                    width="25"
                    alt=""
                  />{' '}
                  Althan Travis
                </td>
                <td>Suscripción figma</td>
                <td className="text-end">
                  <span className="fw-bolder">$0.99</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>65</td>
                <td>19 Oct, 21</td>
                <td>
                  <FcExpired />
                  <span className="ms-1">Error</span>
                </td>
                <td>
                  <img
                    src="https://i.imgur.com/VKOeFyS.png"
                    width="25"
                    alt=""
                  />{' '}
                  Althan Travis
                </td>
                <td>Suscripción figma</td>
                <td className="text-end">
                  <span className="fw-bolder">$0.99</span>{' '}
                  <i className="fa fa-ellipsis-h ms-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
