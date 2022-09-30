import { Directive, ElementRef, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  private _color : string = 'red';
  private _mensaje : string = 'Error Generico';
  private _oculto : boolean = false;

  htmlElement : ElementRef<HTMLElement>


  @Input() set color(valor:string){
    this._color=valor;
    this.setColor()
  }

  @Input() set mensaje(valor:string){
    this._mensaje=valor;
    this.setMensaje();
  }

  @Input() set oculto(valor:boolean | undefined){
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');    
      this._oculto=valor;
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden'); 
      this._oculto= false;
    }
    
    
  }

  constructor(private el:ElementRef<HTMLElement>) { 
      this.htmlElement = el;
  }


  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }



}
