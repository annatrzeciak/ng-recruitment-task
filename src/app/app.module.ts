import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModuleModule } from './core-module/core-module.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { MainService } from './main/main.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModuleModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
