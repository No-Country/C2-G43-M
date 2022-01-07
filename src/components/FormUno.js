import React from 'react';
import { FormGroup, Label, Input, Button, Form } from 'reactstrap';

function FormUno() {
  return (
    <div>
      <Form className="formuno">
        <FormGroup>
          <Label for="exampleSelect">Selecciona sucursal</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <Button>consultar</Button>
        <p>RESPUESTA EN JSON</p>
      </Form>
    </div>
  );
}

export default FormUno;
