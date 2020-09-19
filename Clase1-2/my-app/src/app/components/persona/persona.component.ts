import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  titulo = 'Listado persona';
  listado = [];
  
  constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("Init");
  }

  onCargar(persona : Persona){
    console.log(persona);
    this.listado.push(persona);
  }
}