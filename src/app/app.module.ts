import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './pages/meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './pages/meu-segundo/meu-segundo.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosModule } from './cursos/cursos.module';
import { TestesComponent } from './pages/testes/testes.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './pages/testes/input-property/input-property.component';
import { OutputPropertyComponent } from './pages/testes/output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    TestesComponent,
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
