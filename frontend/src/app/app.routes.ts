import { Routes } from '@angular/router';
import { ProductoListComponent } from './producto-list/producto-list';
import  {ProductoFormComponent} from './producto-form/producto-form';


export const routes: Routes = [
    {path: '', component: ProductoListComponent},
    {path: 'nuevo', component: ProductoFormComponent},
    {path:'editar/:id', component: ProductoFormComponent},
];
