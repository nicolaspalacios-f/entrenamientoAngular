import { UsuariosComponent } from './Site/components/usuarios/usuarios.component';
import { ErrorComponent } from './Site/layout/error/error.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Site/layout/header/header.component';
import { FooterComponent } from './Site/layout/footer/footer.component';
import { BaseComponent } from './Site/layout/base/base.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    ErrorComponent,
    UsuariosComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
