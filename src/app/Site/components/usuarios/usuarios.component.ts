import { User } from './../../../Model/user';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../../Services/usuario.service';

interface usuario {
  ids?: number;
  nombre: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  id: string = '';
  usuario!: User;
  listaUsuarios: User[] = [];
  usuarios: User[] = [];
  collectionSize = this.usuarios.length;
  page = 1;
  pageSize = 4;

  constructor(public UsuarioService: UsuarioService) {
    this.getAll();
  }

  ngOnInit(): void {
    this.usuario = { nombre: 'Nombre', id: 20 };
  }

  updateId(id: string) {
    this.usuario.id = Number(id);
  }

  editarUsuario(id: string, nombre: string) {
    this.UsuarioService.EditarUsuario(Number(id), nombre).subscribe(() => {
      alert('Usuario editado correctamente');
      window.location.reload();
    });
  }

  agregar(nombre: string) {
    this.UsuarioService.AgregarUsuario(nombre).subscribe(() => {
      alert('Usuario agregado');
      window.location.reload();
    });
  }

  eliminar(id: string) {
    this.UsuarioService.EliminarUsuario(Number(id)).subscribe(() => {
      alert('Usuario eliminado');
      window.location.reload();
    });
  }
  elimi(id: string) {
    console.log(id);
  }
  refreshCountries() {
    this.usuarios = this.listaUsuarios;
    this.usuarios = this.usuarios
      .map((usuario, i) => ({
        ids: i + 1,
        ...usuario,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
  getAll() {
    this.UsuarioService.ListaUsuario().subscribe((data) => {
      this.listaUsuarios = Object.values(data);
      this.refreshCountries();
    });
  }
}
