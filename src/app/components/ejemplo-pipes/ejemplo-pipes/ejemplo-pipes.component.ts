import { Component, OnInit } from '@angular/core';
import { IJugador } from 'src/app/models/jugador.interface';
import { IContacto } from 'src/app/models/interfaces/contacto';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

    dob: Date = new Date(1991, 11, 10);
    cambio: boolean = true;
    nombre: string = 'Luis';
    numero_PI: number = Math.PI;
    precioCarrito: number = 100;
    cantidad:number = 0.35;
    textoLargo:string = "kljahsdjkhakjdhajkdhajkhdjkahdkj hakjshdkjahdjkahk k hakshdaksd ahksdhkahd"

    persona: IContacto = {
      id: 0,
      nombre: 'Rogelio',
      apellido: 'Perez',
      edad: 30,
      email: 'r6eKZ@example.com'
    }

    jugador1: IJugador = {
      nombre: 'Luis',
      puntos: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    }

    jugador2: IJugador = {
      nombre: 'LuisA',
      puntos: [10, 15, 50]
    }


  constructor() { }

  ngOnInit(): void {
      
  }

  get dateFormat(){
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  cambiarFormato(){
      this.cambio = !this.cambio;
  }

}
