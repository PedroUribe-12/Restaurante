import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetalleComponent } from './card-detalle/card-detalle.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    CardDetalleComponent,
    CarouselComponent
  ],
  exports:[
    CardDetalleComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]  
})
export class ComponentsModule { }
