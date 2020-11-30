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
valorInput:string = '';
valorInputSalvo:string = '';
nome:string = "abc";
isMouseOver: boolean;
pessoa:any = {
  nome: 'Ana Freitas',
  idade: 21
}
nomeCurso:string = 'Angular';

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

 onKeyUp(evento: KeyboardEvent){
   this.valorInput = (<HTMLInputElement>evento.target).value;
 }

 salvarValor(valor: string){
   this.valorInputSalvo = valor;
 }

 onMouseOverOut(){
  this.isMouseOver = !this.isMouseOver;
 }
}
