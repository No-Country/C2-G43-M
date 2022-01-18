
package com.turnero.NoCountry.repositorios;

import com.turnero.NoCountry.entidades.Sucursal;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface SucursalRepositorio extends JpaRepository<Sucursal, String> {
    
     @Query("select j from Sucursal j where j.nombre LIKE :query")
    List<Sucursal> findAllByQ(@Param("query") String query);

    @Query("select j from Sucursal j where j.id = :id")
    Sucursal encontrarPorId(@Param("id") String id);

    @Query("select j from Sucursal j where j.provincia.provincia = :q")
    List<Sucursal> findAllByProvincia(@Param("q") String q);

    @Query("select j from Sucursal j where j.ciudad.ciudad = :q")
    List<Sucursal> findAllByCiudad(@Param("q") String q);

    @Override
    @Query("select j from Sucursal j order by j.nombre")
    List<Sucursal> findAll();
}
