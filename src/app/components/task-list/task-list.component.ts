import { Component, OnInit } from '@angular/core';
import { Levels, ITask } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
tarea1: ITask = {
  title: "Tarea 1",
  description: "Descripcion 1",
  completed: false,
  level: Levels.info
}

tarea2: ITask = {
  title: "Tarea 2",
  description: "Descripcion 2",
  completed: true,
  level: Levels.Urgent
}

  constructor() { }


  ngOnInit(): void {
  }

  deleteTask(task: ITask){
    alert(`Se procede a eliminar la tarea: ${task.title}`);
  }
}
