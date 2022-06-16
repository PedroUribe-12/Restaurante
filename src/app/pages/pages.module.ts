import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlatillosPrincipalesComponent } from './platillos-principales/platillos-principales.component';
import { PlatillosVegetarianosComponent } from './platillos-vegetarianos/platillos-vegetarianos.component';
import { PostresFriosComponent } from './postres-frios/postres-frios.component';
import { PostresCalientesComponent } from './postres-calientes/postres-calientes.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    PlatillosPrincipalesComponent,
    PlatillosVegetarianosComponent,
    PostresFriosComponent,
    PostresCalientesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
