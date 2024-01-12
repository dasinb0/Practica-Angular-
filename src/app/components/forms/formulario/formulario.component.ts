import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

//Definimos el formulario
miFormulario: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder) {}

ngOnInit() {

  //Creamos el formulario
  this.miFormulario = this.formbuilder.group({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
  });

  //Subscribimos al formulario
  this.miFormulario.valueChanges.subscribe(console.log);
}

}
