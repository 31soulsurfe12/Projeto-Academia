import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './aluno/formulario/formulario.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrofuncionarioComponent } from './cadastrofuncionario/cadastrofuncionario.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CadastrofuncionarioComponent,
    PaginaInicialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
