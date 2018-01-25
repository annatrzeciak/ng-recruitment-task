import { Directive, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';


@Directive({
  selector: '[showErrorInfo]'
})
export class ShowErrorInfoDirective {

  constructor(private el: ElementRef) { 

    el.nativeElement.style.fontWeight = 700;
    el.nativeElement.style.color = '#FF0000';
    el.nativeElement.style.paddingTop='100px';
    el.nativeElement.style.fontSize='30px';
    el.nativeElement.style.textAlign='center';
  }

}
