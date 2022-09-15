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
import { UsuariosDialogComponent } from './Site/components/usuarios/usuarios-dialog/usuarios-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    ErrorComponent,
    UsuariosComponent,
    UsuariosDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MdbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
