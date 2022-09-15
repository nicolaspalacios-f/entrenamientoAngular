import { Component } from '@angular/core';
import { UsuarioService } from './Services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'entrenamiento';
  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.ListaUsuario().subscribe((data) => {
      console.log(data);
    });
  }
}
