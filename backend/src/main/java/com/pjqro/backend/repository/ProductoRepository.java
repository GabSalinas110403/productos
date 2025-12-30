package com.pjqro.backend.repository;

import com.pjqro.backend.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    List<Producto> findByEstatus(String estatus);
}


