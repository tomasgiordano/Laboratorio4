import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../../clases/persona'
import { from } from 'rxjs';

@Component({
  selector: 'app-cargar-persona',
  templateUrl: './cargar-persona.component.html',
  styleUrls: ['./cargar-persona.component.css']
})
export class CargarPersonaComponent implements OnInit {
  @Output()onCargar = new EventEmitter<Persona>();
  nombre : string;
  apellido : string;
  edad : number;

  
  constructor() { }

  ngOnInit(): void {
    console.log(this,this.onCargar);
  }

  cargar(){
    const persona = new  Persona(this.nombre,this.apellido,this.edad);
    this.onCargar.emit(persona);
  }

}