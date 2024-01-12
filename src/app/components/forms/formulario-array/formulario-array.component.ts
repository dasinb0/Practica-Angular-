import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormularioArray = this.formbuilder.group({
      nombre: '',
      apellidos: '',
      telefonos: this.formbuilder.array([])
    })
  }

  //Metodo para obtener el formArray en la lista de telefonos
  get telefonosFormulario(): FormArray {
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  //Metodo para añadir telefonos a la lista
  agregarTelefono() {
    const telefonoNuevo = this.formbuilder.group({
      prefijo: '',
      numero: ''
    });

    //Añadimos el grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);
  }

  //Metodo para borrar telefonos de la lista
  eliminarTelefono(index: number) {
   this.telefonosFormulario.removeAt(index); 
  }

}
