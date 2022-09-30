import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cusIf]'
})
export class CustomIfDirective {


  @Input() set cusIf(cond : boolean) {
    console.log(cond)
    if (cond) {
      this.vc.createEmbeddedView(this.tr)
    }else{
      this.vc.clear()
    }
  }
  

  constructor(
    private tr : TemplateRef<HTMLElement>,private vc: ViewContainerRef
  ) { }

}
