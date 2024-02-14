import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  tasks = [
    'tarea1',
    'tarea2',
    'tarea3',
    'tarea4',
    'tareaN',
  ]
  person = signal({
    name: "juan",
    age: 10,
    city: "buenos aires",
    img: {
      url: "https://artworks.thetvdb.com/banners/posters/262736-1.jpg",
      description: "Description de la imagen"
    }
  })
  disabled = true
  clickHandler() {
    this.disabled = !this.disabled
    alert("Click")
  }
  doubleClick() {
    alert("Doble Click")
  }
  changeHandler(e: Event) {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;
    this.person.set({ ...this.person(), name: newValue })
  }

}
