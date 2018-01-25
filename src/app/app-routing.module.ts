
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormComponent } from './main/form/form.component';
import { InfoComponent } from './main/info/info.component';
import { NotFoundComponent } from './main/not-found/not-found.component';

const APP_ROOTS: Route[] = [{ path: '', pathMatch: 'full', redirectTo: 'form' },
{ path: 'form', component: FormComponent },
{ path: 'info', component: InfoComponent },
{ path: '404', component: NotFoundComponent },
{ path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROOTS)],
    exports: [RouterModule]
})
export class AppRoutingModule { }