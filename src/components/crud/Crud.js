import React, { useEffect } from "react";
import { FormGroup, Label, Input, Form } from "reactstrap";
import "../../assets/boxicons-2.0.7/fonts/boxicons.svg";
//import { RiDeleteBin2Line } from 'react-icons/ri';
import {} from "../../assets/css/crud.css";
import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

function Crud() {
  const ThemeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

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

        <button
          className={`crud__button ${ThemeReducer.mode} ${ThemeReducer.color}`}
        >
          Consultar
        </button>
        <p></p>
        <div className="inputs">
          <label>Cliente</label>
          <div className="dato1">
            <input type="text" placeholder="Nombre completo" />
            <button className={`crud__button-pencil`}>
              <i className="bx bx-pencil"></i>
            </button>
            <button className={`crud__button-pencil`}>
              <i class="bx bx-trash"></i>
            </button>
          </div>
          <label>Producto</label>
          <div className="dato1">
            <input type="text" placeholder="Nombre producto" />
            <button className={`crud__button-pencil`}>
              <i className="bx bx-pencil"></i>
            </button>
            <button className={`crud__button-pencil`}>
              <i class="bx bx-trash"></i>
            </button>
          </div>
        </div>
        <button
          className={`crud__button ${ThemeReducer.mode} ${ThemeReducer.color}`}
        >
          Guardar
        </button>
      </Form>
    </div>
  );
}

export default Crud;
