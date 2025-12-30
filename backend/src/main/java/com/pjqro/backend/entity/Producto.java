package com.pjqro.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "producto")

public class Producto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String producto;
    private Integer codigobarras;
    private String marca;
    private Double costo;
    private String estatus;

    public Integer getId(){
        return id;
    }

    public void setId (Integer id){
        this.id = id;
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto (String producto){
        this.producto = producto;
    }

    public Integer getCodigobarraas() {
        return codigobarras;
    }

    public void setProducto (Integer codigobarras){
        this.codigobarras = codigobarras;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca (String marca){
        this.marca = marca;
    }

    public Double getCosto() {
        return costo;
    }

    public void setCosto (Double costo){
        this.costo = costo;
    }

    public String getEstatus() {
        return estatus;
    }

    public void setEstatus (String estatus){
        this.estatus = estatus;
    }

}