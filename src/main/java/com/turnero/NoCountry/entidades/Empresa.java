/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.turnero.NoCountry.entidades;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

/**
 *
 * @author Rodrigo Caro
 */
@Data
@Entity
public class Empresa implements Serializable {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    
    private String nombre;
    
    private String telefono;
    
    private String direccion;
    
     @NotFound(action=NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "provincia_id", insertable = false, updatable = false)
    private Provincia provincia;
    
     @NotFound(action=NotFoundAction.IGNORE)
    @Column(name = "provincia_id", nullable = false)
    private String provinciaId;
    
     @NotFound(action=NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "ciudad_id", insertable = false, updatable = false)
    private Ciudad ciudad;
    
      @NotFound(action=NotFoundAction.IGNORE)
    @Column(name = "ciudad_id", nullable = false)
    private String ciudadId;
    
    private String email;
}
