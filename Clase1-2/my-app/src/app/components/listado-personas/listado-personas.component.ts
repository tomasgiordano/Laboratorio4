import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../clases/persona'
import { from } from 'rxjs';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {
  @Input()titulo:string;
  @Input()listado:Persona[];
  constructor() { }

  ngOnInit(): void {
  }

}