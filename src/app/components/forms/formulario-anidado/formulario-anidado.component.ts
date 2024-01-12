import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit{

  miFormularioAnidado: FormGroup = new FormGroup({});


  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    const telefonoFijo = this.formbuilder.group({
      prefijo: '',
      numero: ''
    });
  

  const telefonoMovil = this.formbuilder.group({
    prefijo: '',
    numero: ''
  })
 

   //Agrupacion del formulario
   this.miFormularioAnidado = this.formbuilder.group({
     Telefonofijo: telefonoFijo,
     Telefonomovil: telefonoMovil
   })

  }
 }
