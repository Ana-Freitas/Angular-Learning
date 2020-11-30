import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  
  @Input()
  valor:number = 0;

  @Output()
  mudouValor = new EventEmitter();

  constructor() { }

  incrementarValor(){
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor});
  }


  decrementarValor(){
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor});
  }
}
