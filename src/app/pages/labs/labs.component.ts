import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  name = 'jeisson'
  tasks = [
    'tarea1',
    'tarea2',
    'tarea3',
    'tarea4',
    'tarean',
  ]
}
