import React from 'react';
import { FormGroup, Label, Input, Button, Form } from 'reactstrap';
import { GoPencil } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';
//import { RiDeleteBin2Line } from 'react-icons/ri';
import {} from '../../assets/css/crud.css';
function Crud() {
  return (
    <div className="crud">
      <Form className="formuno">
        <FormGroup>
          <Label for="exampleSelect">Selecciona Sucursal</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <Button className="btn btn-dark">Consultar STOCK</Button>
        <p></p>
        <div className="inputs">
          <label>PRODUCTOS X U OTRA COSA</label>
          <div className="dato1">
            <input
              type="number"
              placeholder="ACA VA EL DATO DE LA BASEDEDATOS"
            />
            <button>
              <GoPencil font-size="30px" color="blue" />
            </button>

            <button>
              <AiOutlineDelete font-size="30px" color="red" />
            </button>
          </div>
          <label>PRODUCTOS Y</label>
          <div className="dato2">
            <input type="number" placeholder="ACA DATO DE BASEDEDATOS" />
            <button>
              <GoPencil font-size="30px" color="blue" />
            </button>
            <button>
              <AiOutlineDelete font-size="30px" color="red" />
            </button>
          </div>
        </div>
        <Button className="btn btn-dark mt='15px'">Guardar</Button>
      </Form>
    </div>
  );
}

export default Crud;
