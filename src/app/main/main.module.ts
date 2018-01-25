import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModuleModule
  ],
  declarations: [FormComponent, InfoComponent, NotFoundComponent]
})
export class MainModule { }
