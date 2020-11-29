import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './pages/meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './pages/meu-segundo/meu-segundo.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosModule } from './cursos/cursos.module';
import { TestesComponent } from './pages/testes/testes.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    TestesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
