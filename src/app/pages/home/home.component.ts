import { CommonModule } from '@angular/common';
import { Component,signal } from '@angular/core';

import { Task } from '../../models/task.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  tasks= signal<Task[]>([
    {
      id: Date.now(),
      title: 'Desayunar',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Almorzar',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Cenar',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Dormir',
      completed: false
    },
  ]);
  
  changeHandler(event:Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
    input.value='';
  }
  addTask(title:string){
    const newTask:Task={
      id: 3,
      title,
      completed:false
    }
    this.tasks.update(tasks => [...tasks, newTask])
  }
  deleteTask(index: number){
    this.tasks.update(task => 
      task.filter((task,position)=> position !== index));
  }
  updateTask(index: number){
    this.tasks.update(tasks => 
      tasks.map((task,position) => 
        position == index?{ ...task, completed: !task.completed}:task
      ))
  }
}
