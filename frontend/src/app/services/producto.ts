import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable ({
    providedIn: 'root'
})

export class ProductoService {

    private apiUrl = 'http://localhost:8080/api/productos'

    constructor (private http: HttpClient){}

    getProductos() {
        return this.http.get<any[]> (this.apiUrl);
    }

    deleteProducto(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    getProductosById(id:number) {
        return this.http.get<any> (`${this.apiUrl}/${id}`);
    }

    createProducto(data: any){
        return this.http.post(this.apiUrl, data);
    }

    updateProducto(id: number, data: any){
        return this.http.put (`${this.apiUrl}/${id}`, data);
    }

}