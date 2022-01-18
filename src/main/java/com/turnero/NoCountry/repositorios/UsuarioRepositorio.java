/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.turnero.NoCountry.repositorios;

import com.turnero.NoCountry.entidades.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nicol
 */
@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, String>{

    @Query("select u from Usuario u where u.username = :username")
    Usuario findByUserName(@Param("username") String username);
    }
    
