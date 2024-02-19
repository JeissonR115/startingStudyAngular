import { CommonModule } from '@angular/common';
import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal([
    'Desayunar',
    'Almorzar',
    'Cenar',
    'Dormir',
    'asdf'
  ]);
  changeHandler(event:Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update(task =>[...task,newTask]);
    input.value = ''
  }
  deleteTask(index: number){
    this.tasks.update(task => task.filter((task,position)=> position !== index));
  }
}
