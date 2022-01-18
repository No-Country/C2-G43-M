/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.turnero.NoCountry.servicios;

import com.turnero.NoCountry.entidades.Ciudad;
import com.turnero.NoCountry.entidades.Empresa;
import com.turnero.NoCountry.entidades.Provincia;
import com.turnero.NoCountry.excepciones.WebException;
import com.turnero.NoCountry.repositorios.EmpresaRepositorio;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Rodrigo Caro
 */
@Service
public class EmpresaServicio {
    @Autowired
    private EmpresaRepositorio empresaRepositorio;

    public Empresa save(Empresa empresa) throws WebException, IOException {
        if (empresa.getNombre().isEmpty() || empresa.getNombre()== null) {
            throw new WebException("Debe ingresar el nombre de la empresa");
        }
        
        if (empresa.getTelefono().isEmpty() || empresa.getTelefono()== null) {
            throw new WebException("Debe ingresar el telefono de la empresa");
        }

        if (empresa.getDireccion().isEmpty() || empresa.getDireccion()== null) {
            throw new WebException("Debe ingresar la direccion de la empresa");
        }

       if (empresa.getEmail().isEmpty() || empresa.getEmail()== null) {
            throw new WebException("Debe ingresar email de la empresa");
        }
       
       
        return empresaRepositorio.save(empresa);

    }

    public List<Empresa> listAll() {
        List<Empresa> lista = empresaRepositorio.findAll();
        return lista;
    }


    public List<Empresa> listallByQ(String query) {
        List<Empresa> lista = empresaRepositorio.findAllByQ("%" + query + "%");
        return lista;
    }

    public Optional<Empresa> findById(String id) {
        return empresaRepositorio.findById(id);
    }

    public Empresa findById2(Empresa empresa) {
        Optional<Empresa> optional1 = empresaRepositorio.findById(empresa.getId());
        if (optional1.isPresent()) {
            empresa = optional1.get();
        }
        return empresa;
    }

    @Transactional
    public void delete(Empresa empresa) {
        empresaRepositorio.delete(empresa);
    }

    @Transactional
    public void deleteById(String id) {
        Optional<Empresa> optional = empresaRepositorio.findById(id);
        if (optional.isPresent()) {
            empresaRepositorio.delete(optional.get());
        }
    }

    public Empresa encontrarPorId(String id) {
        return empresaRepositorio.encontrarPorId(id);
    }

    @Transactional
    public void deleteFieldProvincia(Provincia provincia) {
        List<Empresa> empresa = empresaRepositorio.findAllByProvincia(provincia.getProvincia());
        for (Empresa empresa1 : empresa) {
            empresa1.setProvincia(null);
        }
        empresaRepositorio.saveAll(empresa);
    }

    @Transactional
    public void deleteFieldCiudad(Ciudad ciudad) {
        List<Empresa> empresa = empresaRepositorio.findAllByCiudad(ciudad.getCiudad());
        for (Empresa empresa1 : empresa) {
            empresa1.setCiudad(null);
        }
        empresaRepositorio.saveAll(empresa);
    }



}
