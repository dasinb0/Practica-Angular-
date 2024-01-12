import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    let body = {
      email: login,
      password: password,
    }
    console.log(body);
    return this.http.post('https://reqres.in/api/login', body);
  }
  
}
