package com.pjqro.backend.controller;

import com.pjqro.backend.entity.Producto;
import com.pjqro.backend.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    @Autowired
    private ProductoRepository repository;

    @GetMapping 
    public List<Producto> listar() {
        return repository.findByEstatus("Activo");
    } 

    @GetMapping("/{id}")
    public Producto obtener(@PathVariable Integer id){
        return repository.findById(id).orElse(null);
    }

    @PostMapping
    public Producto crear(@RequestBody Producto producto){
        producto.setEstatus ("Activo");
        return repository.save(producto);
    }

    @PutMapping ("/{id}") 
    public Producto editar(@PathVariable Integer id, @RequestBody Producto producto){
        producto.setId(id);
        return repository.save(producto);
    }

    @DeleteMapping ("/{id}")
    public void eliminar(@PathVariable Integer id) {
        Producto p = repository.findById(id).orElse(null);
        if (p != null){
            p.setEstatus("Inactivo");
            repository.save(p);
        }
    }
    
}