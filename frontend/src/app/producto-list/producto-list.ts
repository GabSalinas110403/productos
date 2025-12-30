import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeDetectorRef } from "@angular/core";
import { ProductoService } from "../services/producto";
import { Router } from "@angular/router";

@Component ({
    selector: 'app-producto-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./producto-list.html"
})

export class ProductoListComponent implements OnInit {
    productos: any[] = [];
    
    constructor (
        private ProductoService: ProductoService,
        private router: Router,
        private cdr: ChangeDetectorRef
    ){} 

    ngOnInit(): void {
        this.cargarProductos();
    }

    cargarProductos (){
        this.ProductoService.getProductos().subscribe(data => {
            this.productos = data;
            this.cdr.detectChanges();
        })
    }

    eliminar(id: number){
        if (confirm("Borrar?")) {
            this.ProductoService.deleteProducto(id).subscribe(data =>{
                this.cargarProductos();
            });
        }
    }

    editar(id: number){
        this.router.navigate(['/editar', id]);
    }
    
    irANuevo(){
        this.router.navigate(['/nuevo'])
    }


}