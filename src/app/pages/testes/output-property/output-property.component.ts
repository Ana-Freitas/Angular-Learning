import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  
  @ViewChild('campoInput')
  campoValorInput: ElementRef;

  @Input()
  valor:number = 0;

  @Output()
  mudouValor = new EventEmitter();

  constructor() { }

  incrementarValor(){
    console.log(this.campoValorInput.nativeElement.value);
    // this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor});
  }


  decrementarValor(){
    // this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor});
  }
}
