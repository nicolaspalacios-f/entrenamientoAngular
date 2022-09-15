import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  _url = 'https://localhost:7226/';
  constructor(private http: HttpClient) {}
  ListaUsuario() {
    let header = new HttpHeaders().set('Type-Content', 'application/json');
    return this.http.get(this._url + 'api/services', {
      headers: header,
    });
  }

  ListaUsuarioPorId(id: number) {
    let header = new HttpHeaders().set('Type-Content', 'application/json');
    return this.http.post(
      this._url + 'api/services/ListaUsuarioPorId?id=' + id,
      {
        headers: header,
      }
    );
  }
  AgregarUsuario(nombre: string) {
    let header = new HttpHeaders().set('Type-Content', 'application/json');
    return this.http.post(
      this._url + 'api/services/InsertarUsuario?modelo=' + nombre,
      {
        nombre: nombre,
        headers: header,
      }
    );
  }

  EditarUsuario(id: Number, nombre: string) {
    let header = new HttpHeaders().set('Type-Content', 'application/json');
    return this.http.post(
      this._url + 'api/services/UpdateUsuarioo?Id=' + id + '&nombre=' + nombre,
      {
        Id: id,
        nombre: nombre,
        headers: header,
      }
    );
  }

  EliminarUsuario(id: Number) {
    let header = new HttpHeaders().set('Type-Content', 'application/json');
    return this.http.delete(this._url + 'api/services/DeleteUsuario?Id=' + id, {
      headers: header,
    });
  }
}
