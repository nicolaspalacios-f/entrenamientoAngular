import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  id: string = '';
  constructor() {}

  ngOnInit(): void {}

  updateId(id: string) {
    this.id = id;
  }
}
