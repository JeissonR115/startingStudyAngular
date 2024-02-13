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
    'tareaN',
  ]
  age = 19
  disabled= true
  img = "https://artworks.thetvdb.com/banners/posters/262736-1.jpg"
  imgDescription = "Descripcion de la imagen"
}
