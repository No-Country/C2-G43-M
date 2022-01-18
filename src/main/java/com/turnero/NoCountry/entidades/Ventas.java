/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.turnero.NoCountry.entidades;

import java.time.LocalDate;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

/**
 *
 * @author Rodrigo Caro
 */
@Data
@Entity
public class Ventas {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "usuario_id", insertable = false, updatable = false)
    private Usuario usuario;
    
    @Column(name = "usuario_id", nullable = false)
    private String usuarioId;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "producto_id", insertable = false, updatable = false)
    private Producto producto;
    
    @Column(name = "producto_id", nullable = false)
    private String productoId;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "cliente_id", insertable = false, updatable = false)
    private Cliente cliente;
    
    @Column(name = "cliente_id", nullable = false)
    private String clienteId;
    
    private Double monto;
    
    @Column(name = "cliente_interes")
    private Double tasaInteres;
    
    @Column(name = "fecha_venta")
    @DateTimeFormat(pattern= ("yyyy-MM-dd HH:mm:ss"))
    private LocalDate fechaContrato;
   
   
     
}
