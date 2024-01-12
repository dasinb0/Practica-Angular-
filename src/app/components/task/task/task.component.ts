import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Levels, ITask } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();


  constructor() { }

  ngOnInit(): void {
    
  }

  deletedTask(){
    this.delete.emit(this.task);
  }

}
