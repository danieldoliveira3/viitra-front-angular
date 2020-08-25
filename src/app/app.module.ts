import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcasListagemComponent } from './marcas-listagem/marcas-listagem.component';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcasListagemComponent,
    CarrosListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
