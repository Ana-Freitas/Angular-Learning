import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent {

url:string;
cursoAngular: boolean = true;
urlImagem = "http://lorempixel.com/400/200/nature/";

  constructor() { 
    this.url = "https://www.google.com/";
  }

 getValor(){
   return 1;
 }

 getCurtirCurso(): boolean{
   return true;
 }

 clicou(){
   alert("OMG! ELE CLICOU!");
 }
}
