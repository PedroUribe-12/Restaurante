import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.css']
})
export class CardDetalleComponent implements OnInit {

  public dogs: Dog[] = [];

  constructor() {
    this.dogs = [{
      nombre:'Leopoldo',
      raza:'Shiba Inu',
      edad: 10,
      imagen:'https://www.hola.com/imagenes/mascotas/20210907195570/razas-de-perro-shiba-inu/0-992-7/shiba-inu-perro-t.jpg',
      descripcion:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      avatar:"background-image: url('https://estaticos.muyinteresante.es/uploads/images/gallery/5af2b0025cafe84e7649eb09/shiba-panuelo.jpg')"
    }]
   }

  ngOnInit(): void {
  }

}
