import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorInfoDirective } from './show-error-info.directive';
import { ShowOKInfoDirective } from './show-ok-info.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ShowErrorInfoDirective, ShowOKInfoDirective],
  declarations: [ShowErrorInfoDirective, ShowOKInfoDirective]
})
export class SharedModuleModule { }
