import { User } from './../../../../Model/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioService } from './../../../../Services/usuario.service';

@Component({
  selector: 'app-usuarios-dialog',
  templateUrl: './usuarios-dialog.component.html',
  styleUrls: ['./usuarios-dialog.component.scss'],
})
export class UsuariosDialogComponent implements OnInit {
  @Input() usuario!: User;
  @Output() evento = new EventEmitter<string>();
  constructor(public UsuarioService: UsuarioService) {}

  ngOnInit(): void {}

  funcionOutput(value: string) {
    this.evento.emit(value);
  }
  id: number = 0;
  agregar(nuevaCaracteristica: string) {
    this.usuario.nombre = nuevaCaracteristica;
  }
  getId(id: number) {
    this.UsuarioService.ListaUsuarioPorId(id).subscribe((data) => {
      console.log(data);
    });
  }
  getAll() {
    this.UsuarioService.ListaUsuario().subscribe((data) => {});
  }
}
