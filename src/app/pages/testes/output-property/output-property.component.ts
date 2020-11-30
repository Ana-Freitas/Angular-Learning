import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  
  @ViewChild('campoInput')
  campoValorInput: HTMLElement;

  @Input()
  valor:number = 0;

  @Output()
  mudouValor = new EventEmitter();

  constructor() { }

  incrementarValor(){
    console.log(this.campoValorInput);
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor});
  }


  decrementarValor(){
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor});
  }
}
