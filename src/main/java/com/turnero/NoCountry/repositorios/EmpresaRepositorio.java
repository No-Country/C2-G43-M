/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.turnero.NoCountry.repositorios;

import com.turnero.NoCountry.entidades.Empresa;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Rodrigo Caro
 */
@Repository
public interface EmpresaRepositorio extends JpaRepository<Empresa, String> {

    
    @Query("select j from Empresa j where j.nombre LIKE :query")
    List<Empresa> findAllByQ(@Param("query") String query);

    @Query("select j from Empresa j where j.id = :id")
    Empresa encontrarPorId(@Param("id") String id);

    @Query("select j from Empresa j where j.provincia.provincia = :q")
    List<Empresa> findAllByProvincia(@Param("q") String q);

    @Query("select j from Empresa j where j.ciudad.ciudad = :q")
    List<Empresa> findAllByCiudad(@Param("q") String q);

    @Override
    @Query("select j from Empresa j order by j.nombre")
    List<Empresa> findAll();
}
