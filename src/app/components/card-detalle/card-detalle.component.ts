import { Component, OnInit } from '@angular/core';
import { Platillo } from 'src/app/models/platillos';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.css']
})
export class CardDetalleComponent implements OnInit {

  public platillos: Platillo[] = [];

  constructor() {
    this.platillos = [{
      nombre:'Leopoldo',
      precio: 10,
      imagen:'../../../assets/platillos_principales/Confit-de-pato.jpg',
      descripcion:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      puntuacion: 5
    },
    {
      nombre:'Shadow',
      precio: 6,
      imagen:'../../../assets/platillos_principales/langosta.jpg',
      descripcion:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      puntuacion: 6
    },
    {
      nombre:'Pancho',
      precio: 10,
      imagen:'../../../assets/platillos_principales/skrei-a-la-vinagreta.jpg',
      descripcion:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      puntuacion: 9
    },
    {
      nombre:'Pancho',
      precio: 10,
      imagen:'../../../assets/platillos_principales/carne libano.webp',
      descripcion:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      puntuacion: 10
    }
  ]
   }

  ngOnInit(): void {
  }

}
