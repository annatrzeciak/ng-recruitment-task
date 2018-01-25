import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorInfoDirective } from './show-error-info.directive';
import { ShowOKInfoDirective } from './show-ok-info.directive';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ShowErrorInfoDirective, ShowOKInfoDirective, SpinnerComponent],
  declarations: [ShowErrorInfoDirective, ShowOKInfoDirective, SpinnerComponent]
})
export class SharedModuleModule { }
