import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormComponent, InfoComponent, NotFoundComponent]
})
export class MainModule { }
