import { Directive, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[showOKInfo]'
})
export class ShowOKInfoDirective {

  constructor(private el: ElementRef) { 

    el.nativeElement.style.fontWeight = 700;
    el.nativeElement.style.color = '#02c502';
    el.nativeElement.style.paddingTop='100px';
    el.nativeElement.style.fontSize='30px';
    el.nativeElement.style.textAlign='center';
  }

}
