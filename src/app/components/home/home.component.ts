import { Component, Input, Output, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  public titulo:string = "Sin seleccionar";
  public favorita : Pelicula;
  public enviadaInput: Pelicula;
  constructor() {
   }

  ngOnInit(): void {
    console.log("inicia home");
  }

  mostrarFavorita(event){
    console.log(event);
    this.favorita = event.title;
    this.enviadaInput = event.title;
    console.log("");
  }

}
