import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloCotizacionComponent } from './components/cotizacion/modulo-cotizacion/modulo-cotizacion.component';
import { ListaProspectosComponent } from './components/prospectos/lista-prospectos/lista-prospectos.component';
import { Test1Component } from './components/test1/test1.component';

import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloCotizacionComponent,
    ListaProspectosComponent,
    Test1Component, 
    PeliculasComponent, HomeComponent, FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
