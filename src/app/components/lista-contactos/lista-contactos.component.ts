import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from 'src/app/models/interfaces/contacto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contactoService.obtenerContactos()
      .then((lista: IContacto[]) => {
        this.listaContactos = lista;
      })
      .catch((error) => {
        console.error(`Ha habido un error al recuperar la lista de contactos: ${error}`);
      })
      .finally(() => {
        console.log('Se ha terminado de cargar la lista de contactos');
      });
  }

  subscription: Subscription | undefined;

  obtenerContacto(id: number) {
    this.subscription = this.contactoService.obtenerContactoPorId(id)?.subscribe(
      (contacto: IContacto | undefined) => {
        if (contacto) {
          this.contactoSeleccionado = contacto;
        }
      },
      (error: any) => {
        console.error(`Ha habido un error al recuperar el contacto: ${error}`);
      },
      () => {
        console.log('Se ha terminado de cargar el contacto');
      }
    );
  }
  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

