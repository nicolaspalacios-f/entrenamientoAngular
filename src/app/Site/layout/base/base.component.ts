import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  disabledProperty = true;

  habilitarProperty = false;

  textoHabilitado: String = 'no Habilitado';

  getHabilitarProperty() {
    this.habilitarProperty = true;
  }

  setHabilirarProperty() {
    this.textoHabilitado = 'Habilitado';
    this.disabledProperty = !this.disabledProperty;
  }

  constructor() {}

  ngOnInit(): void {}
}
