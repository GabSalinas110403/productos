import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeDetectorRef } from "@angular/core";
import { ProductoService } from "../services/producto";
import { Router } from "@angular/router";

import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component ({
    selector: 'app-producto-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: "./producto-form.html"
})

export class ProductoFormComponent {
    id: number | null = null;

    producto: any = {
        producto: '',
        codigobarras: '',
        marca: '',
        costo: '',
    };

    
}