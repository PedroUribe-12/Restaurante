import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    TopButtonComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    TopButtonComponent
  ]
})
export class SharedModule { }
