import React from "react";

import Table from "../components/table/Table";

import customerList from "../assets/JsonData/customers-list.json";

const customerTableHead = [
  "",
  "Nombre",
  "email",
  "Telefono",
  "Ordenes totales",
  "Gasto total",
  "localidad",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customers = () => {
  return (
    <div className="customers">
      <h2 className="page-header">Clientes</h2>
      <div className="row">
        <div className="col-12">
          <div className="card__">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
