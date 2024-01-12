import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/interfaces/contacto';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoPorId(id: number): Observable<IContacto | undefined> {
    const contacto = CONTACTOS.find((c: IContacto) => c.id === id);

    if (contacto) {
      return of(contacto);
    } else {
      return of(undefined);
    }
  }
}

